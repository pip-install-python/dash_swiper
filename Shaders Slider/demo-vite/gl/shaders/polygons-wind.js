import {
  vertexCommon,
  vertexRotate,
  PI,
  fragmentCommon,
} from './shadersCommon';

export const polygonsWind = {
  uniforms: {},
  detail: 40,
  offsetTop: 1,
  vertex: /* glsl */ `
    ${vertexCommon}
    attribute vec3 control0;
    attribute vec3 control1;

    ${vertexRotate}

    float easeOut(float t){
      return  t * t * t;
    }

    vec3 bezier4(vec3 a, vec3 b, vec3 c, vec3 d, float t) {
      return mix(mix(mix(a, b, t), mix(b, c, t), t), mix(mix(b, c, t), mix(c, d, t), t), t);
    }

    void main() {
      ${PI}
      vUv = uv;
      vBary = bary;

      vec3 newpos = position;

      float o = 1. - offset;
      float prog = clamp((progress - o * 0.6) / 0.4, 0., 1.);
      vProgress = prog;
      vProgress1 = clamp((progress - clamp(o - 0.2, -0., 1.) * 0.6) / 0.4, 0., 1.);
      newpos = bezier4(newpos, control0, control1, newpos, easeOut(prog));
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
    }
  `,
  fragment: /* glsl */ `
    ${fragmentCommon}
    varying float vProgress;
    varying float vProgress1;
    ${PI}
    varying vec3 vBary;
    void main()	{
      float width = 2.5 * vProgress1;
      vec3 d;
      #ifdef GL_OES_standard_derivatives
        d = fwidth(vBary);
      #endif
      vec3 s = smoothstep(d * (width + 0.5), d * (width - 0.5), vBary);
      float alpha = max(max(s.x, s.y), s.z);
      vec3 color = vec3(alpha);

      vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
      vec4 t = texture2D(texture1, newUV);
      float opa = smoothstep(1., 0.5, vProgress);
      opa = 1. - vProgress;
      gl_FragColor = vec4(vUv, 0.0, opa);
      opa = smoothstep(0.5, 1., opa);
      gl_FragColor = vec4(t.rgb + 1. * color * vProgress1, opa);
    }
  `,
};
