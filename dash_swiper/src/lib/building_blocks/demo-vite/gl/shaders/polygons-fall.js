import {
  vertexCommon,
  vertexRotate,
  PI,
  fragmentCommon,
} from './shadersCommon';

export const polygonsFall = {
  uniforms: {},
  detail: 12,
  offsetTop: 0,
  vertex: /* glsl */ `
    ${vertexCommon}
    attribute vec3 centroid1;

    ${vertexRotate}

    void main() {
      ${PI}
      vUv = uv;
      vBary = bary;

      vec3 newpos = position;

      float o = 1. - offset;
      float pr = (progress - 0.5) * (0. + resolution.y / resolution.x) + 0.5;
      pr = progress;
      float prog = clamp((pr - o * 0.9) / 0.1, 0., 1.);
      vProgress = prog;
      vProgress1 = clamp((pr - clamp(o - 0.1, 0., 1.) * 0.9) / 0.1, 0., 1.);
      newpos = rotate((newpos - centroid1), vec3(1., 0., 0.), -prog * PI) + centroid1 + vec3(0., -1., 0.) * prog * 0.;
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
      gl_FragColor = vec4(t.rgb + .5 * color * vProgress1, opa);
    }
  `,
};
