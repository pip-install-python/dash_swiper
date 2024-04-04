import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './main.scss';
import SwiperGL from './swiper-gl.esm.js';
import './swiper-gl.scss';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, SwiperGL],
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
