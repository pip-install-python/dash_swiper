
const swiper = new Swiper('.swiper', {
  modules: [SwiperGL],
  speed: 1000,
  effect: 'gl',
  loop: true,
  gl: {
    shader: 'random',
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

const pickerEl = document.querySelector('.demo-shader-picker');
const optionsEl = document.querySelector('.demo-shader-options');
const setShader = (shader) => {
  document.querySelector('.demo-shader-current').textContent = shader;
  swiper.gl.replaceShader(shader);
};
document
  .querySelector('.demo-shader-selector')
  .addEventListener('click', () => {
    optionsEl.style.display =
      optionsEl.style.display === 'none' || !optionsEl.style.display
        ? 'block'
        : 'none';
  });

optionsEl.addEventListener('click', (e) => {
  if (e.target.nodeName === 'SPAN') {
    setShader(e.target.textContent.trim());
    optionsEl.style.display = 'none';
  }
});
document.addEventListener('click', (e) => {
  if (pickerEl.contains(e.target)) return;
  optionsEl.style.display = 'none';
});
