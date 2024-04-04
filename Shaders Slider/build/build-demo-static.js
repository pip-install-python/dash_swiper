const fs = require('fs');
const sass = require('sass');

// HTML
let indexContent = fs.readFileSync('./demo-vite/index.html', 'utf-8');
indexContent = indexContent
  .replace(/.\/images/g, '../assets/images')
  .replace('favicon', '../assets/favicon')
  .replace(
    '<title>',
    `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
  <link rel="stylesheet" href="../dist/swiper-gl.min.css">
  <link rel="stylesheet" href="./main.css">
  <title>`,
  )
  .replace(
    `<script type="module" src="/main.js"></script>`,
    `
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="../dist/swiper-gl.min.js"></script>
  <script src="./main.js"></script>
`,
  );

// CSS
const scssContent = fs.readFileSync('./demo-vite/main.scss', 'utf-8');
const cssContent = sass.compileString(scssContent).css;

// JS

let jsContent = fs.readFileSync('./demo-vite/main.js', 'utf-8');
jsContent = jsContent
  .split('\n')
  .filter(
    (line) =>
      !line.startsWith('import') &&
      !line.startsWith('/**') &&
      !line.startsWith(' */') &&
      !line.startsWith(' * ') &&
      line !== ' *',
  )
  .join('\n')
  .replace(/modules: \[([A-Z0-9a-z, ]*)\]/i, 'modules: [SwiperGL]');

// WRITE
fs.writeFileSync('./demo-static/index.html', indexContent);
fs.writeFileSync('./demo-static/main.css', cssContent);
fs.writeFileSync('./demo-static/main.js', jsContent);
