import GL from './gl/gl';

if (typeof window !== 'undefined' && window.SwiperElementRegisterParams) {
  window.SwiperElementRegisterParams(['gl']);
}

export default function SwiperGL({ swiper, on, extendParams }) {
  swiper.gl = null;
  let noWebGLSupport = false;

  function supportsWebGL() {
    try {
      const canvas = document.createElement('canvas');
      return (
        !!window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  }

  extendParams({
    gl: {
      shader: 'random',
      shaderPerSlide: false,
      displacementMap: undefined,
    },
  });

  const glInit = () => {
    swiper.gl = new GL({
      debug: true,
      swiper,
      shader: swiper.params.gl.shader,
      shaderPerSlide: swiper.params.gl.shaderPerSlide,
    });
  };

  let needsTransitionDuration;
  let previousProgress;

  on('beforeInit', () => {
    if (swiper.params.effect !== 'gl') return;
    if (!supportsWebGL()) {
      noWebGLSupport = true;
      return;
    }

    swiper.classNames.push(`${swiper.params.containerModifierClass}gl`);
    const overwriteParams = {
      watchSlidesProgress: true,
    };
    Object.assign(swiper.params, overwriteParams);
    Object.assign(swiper.originalParams, overwriteParams);
  });
  on('init', () => {
    if (swiper.params.effect !== 'gl' || noWebGLSupport || swiper.glDestroyed)
      return;
    if (!swiper.gl) {
      glInit();
    }
  });
  on('resize', () => {
    if (swiper.params.effect !== 'gl' || noWebGLSupport || swiper.glDestroyed)
      return;
    swiper.gl.resize();
  });

  on('setTranslate', () => {
    if (swiper.params.effect !== 'gl' || noWebGLSupport || swiper.glDestroyed)
      return;
    if (!swiper.gl) {
      glInit();
    }
    let from;
    let to;
    let transitionProgress;
    let needShaderReplace = false;
    swiper.slides.forEach((slideEl, slideIndex) => {
      // eslint-disable-next-line
      const progress = slideEl.progress;
      if (swiper.params.cssMode && Math.round(progress * 100) === 0) {
        needShaderReplace = true;
      }
      if (
        (progress > 0 && progress < 1) ||
        (progress === 0 && swiper.progress < previousProgress)
      ) {
        from = slideIndex;
        to = slideIndex + 1;
        transitionProgress = progress;
      }
      if (
        (progress < 0 && progress > -1) ||
        (progress === 0 && swiper.progress > previousProgress)
      ) {
        from = slideIndex - 1;
        to = slideIndex;
        transitionProgress = 1 + progress;
      }
    });

    previousProgress = swiper.progress || 0;
    if (typeof from === 'undefined' && typeof to === 'undefined') {
      return;
    }
    needShaderReplace =
      needShaderReplace &&
      Math.round(transitionProgress) === transitionProgress;
    swiper.gl.setProgress(
      from,
      to,
      transitionProgress,
      needsTransitionDuration,
      needShaderReplace,
    );
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== 'gl' || noWebGLSupport || swiper.glDestroyed)
      return;
    needsTransitionDuration = duration > 0 && !swiper.params.cssMode;
  });
  on('slidesGridLengthChange', () => {
    if (
      swiper.params.effect !== 'gl' ||
      noWebGLSupport ||
      !swiper.initialized ||
      swiper.glDestroyed
    )
      return;
    if (swiper.gl && swiper.gl.loadTextures) {
      swiper.gl.loadTextures();
    }
  });
  on('beforeDestroy', () => {
    if (swiper.params.effect !== 'gl' || noWebGLSupport) return;
    if (swiper.gl) {
      swiper.glDestroyed = true;
      swiper.gl.destroy();
      swiper.gl = null;
    }
  });
}
