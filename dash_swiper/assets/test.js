const swiperEl = document.querySelector('swiper-container');
  const params = {
    modules: [SwiperGL],
    effect: 'gl',
    gl: {
      shader: 'morph-x',
    },
  };
  Object.assign(swiperEl, params);
  swiperEl.initialize();