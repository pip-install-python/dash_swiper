const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');
const Terser = require('terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const banner = require('./banner');

const buildESM = async () => {
  const bundle = await rollup({
    input: path.resolve(__dirname, '../demo-vite/swiper-gl.esm.js'),
    plugins: [nodeResolve()],
  });
  await bundle.write({
    format: 'esm',
    name: 'SwiperGL',
    strict: true,
    sourcemap: false,
    file: path.resolve(__dirname, '../dist/swiper-gl.esm.js'),
    banner,
  });
};

const buildJs = async () => {
  await buildESM();
  const bundle = await rollup({
    input: path.resolve(__dirname, '../demo-vite/swiper-gl.esm.js'),
    plugins: [nodeResolve()],
  });
  const bundleResult = await bundle.write({
    format: 'umd',
    name: 'SwiperGL',
    strict: true,
    sourcemap: true,
    sourcemapFile: path.resolve(__dirname, '../dist/swiper-gl.js.map'),
    file: path.resolve(__dirname, '../dist/swiper-gl.js'),
    banner,
  });
  const result = bundleResult.output[0];
  const { code, map } = await Terser.minify(result.code, {
    sourceMap: {
      content: result.map,
      filename: `swiper-gl.min.js`,
      url: `swiper-gl.min.js.map`,
    },
    output: {
      preamble: banner,
    },
  }).catch((err) => {
    console.error(`Terser failed on file swiper-gl: ${err.toString()}`);
  });

  fs.writeFileSync(path.resolve(__dirname, `../dist/swiper-gl.min.js`), code);
  fs.writeFileSync(
    path.resolve(__dirname, `../dist/swiper-gl.min.js.map`),
    map,
  );
};
module.exports = buildJs;
