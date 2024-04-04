import { fragmentCommon } from './shadersCommon';

export const dots = {
  uniforms: {},
  fragment: /* glsl */ `
    ${fragmentCommon}
    const float SQRT_2 = 1.414213562373;
    const vec2 center = vec2(0, 0);// = vec2(0, 0);
    const float dots = 20.0;// = 20.0;

    vec4 getFromColor(vec2 p) {
      return texture2D(texture1, p);
    }

    vec4 getToColor(vec2 p) {
      return texture2D(texture2, p);
    }

    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

      bool nextImage = distance(fract(newUV * dots), vec2(0.5, 0.5)) < ( progress / distance(newUV, center));
      gl_FragColor = nextImage ? getToColor(newUV) : getFromColor(newUV);
    }

  `,
};
