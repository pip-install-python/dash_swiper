import { fragmentCommon } from './shadersCommon';

export const waveX = {
  uniforms: {
    // width: {value: 0.35, type:'f', min:0., max:1},
  },
  fragment: /* glsl */ `
  ${fragmentCommon}
  uniform sampler2D displacement;
  vec2 mirrored(vec2 v) {
    vec2 m = mod(v,2.);
    return mix(m,2.0 - m, step(1.0 ,m));
  }
  void main()	{
    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
    vec4 noise = texture2D(displacement, mirrored(newUV+time*0.04));
    float prog = (1.0 - progress)*0.8 -0.05 + noise.g * 0.06;
    float intpl = pow(abs(smoothstep(0., 1., (prog*2. - vUv.x + 0.5))), 10.);

    vec4 t1 = texture2D( texture2, (newUV - 0.5) * (1.0 - intpl) + 0.5 ) ;
    vec4 t2 = texture2D( texture1, (newUV - 0.5) * intpl + 0.5 );
    gl_FragColor = mix( t1, t2, intpl );
  }
  `,
};
