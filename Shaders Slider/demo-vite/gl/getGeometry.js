import { createNoise2D } from 'simplex-noise';
import { Geometry } from 'ogl'; // eslint-disable-line

function randFloatSpread(range) {
  return range * (0.5 - Math.random());
}

function randFloat(low, high) {
  return low + Math.random() * (high - low);
}

const noise2D = createNoise2D(Math.random);

function clamp(a) {
  return Math.max(0, Math.min(1, a));
}

// eslint-disable-next-line
export function getGeometry(gl, detail, offsetTop) {
  offsetTop = offsetTop || 0;
  const number = detail;
  const width = 2;
  const height = 2;

  const gran = width / number;
  const granH = (gran * Math.sqrt(3)) / 2;
  const rows = height / granH;

  const offsets = [];
  const positions = [];
  const centroids = [];
  const control0 = [];
  const control1 = [];
  const randoms = [];
  const uvs = [];
  let currentShift = 0;
  const bary = [];
  let currentHeight = 0;
  const scale = 2;

  for (let j = 0; j < rows; j += 1) {
    currentHeight = j * granH;
    if (j % 2 === 1) {
      currentShift = -gran / 2;
    } else {
      currentShift = 0;
    }
    for (let i = 0; i <= number; i += 1) {
      const sign = Math.sign(i * gran + currentShift - width / 2);
      // sign =1
      // first triangle
      positions.push(
        i * gran + currentShift - width / 2,
        currentHeight - height / 2,
        0,
      );
      uvs.push((i * gran + currentShift) / width, currentHeight / height);
      positions.push(
        i * gran + gran / 2 + currentShift - width / 2,
        granH + currentHeight - height / 2,
        0,
      );
      uvs.push(
        (i * gran + gran / 2 + currentShift) / width,
        (granH + currentHeight) / height,
      );
      positions.push(
        i * gran - gran / 2 + currentShift - width / 2,
        granH + currentHeight - height / 2,
        0,
      );
      uvs.push(
        (i * gran - gran / 2 + currentShift) / width,
        (granH + currentHeight) / height,
      );

      let simp = noise2D(i / rows, j / rows) + Math.random();
      const o = clamp(currentHeight / height + (2 * simp) / detail);
      let r = Math.random();
      offsets.push(o, clamp(o + 0.1 * offsetTop), clamp(o + 0.1 * offsetTop));
      randoms.push(r, r, r);
      const c = [
        i * gran + currentShift - width / 2,
        currentHeight - height / 2,
        0,
      ];
      centroids.push(...c, ...c, ...c);

      const ctrl0 = [
        scale * sign * randFloat(-0.3, 0.3),
        -scale * randFloat(-0.3, 0.3) * 1.5,
        -randFloatSpread(0.5),
      ];
      const ctrl1 = [
        scale * sign * randFloat(0.3, 0.6),
        -scale * randFloat(0.3, 0.6) * 1.5,
        -randFloatSpread(0.5),
      ];
      control0.push(...ctrl0, ...ctrl0, ...ctrl0);
      control1.push(...ctrl1, ...ctrl1, ...ctrl1);

      bary.push(0, 0, 1, 0, 1, 0, 1, 0, 0);
      // second triangle
      positions.push(
        i * gran + currentShift - width / 2,
        currentHeight - height / 2,
        0,
      );
      uvs.push((i * gran + currentShift) / width, currentHeight / height);
      positions.push(
        i * gran + gran + currentShift - width / 2,
        currentHeight - height / 2,
        0,
      );
      uvs.push(
        (i * gran + gran + currentShift) / width,
        currentHeight / height,
      );
      positions.push(
        i * gran + gran / 2 + currentShift - width / 2,
        granH + currentHeight - height / 2,
        0,
      );
      uvs.push(
        (i * gran + gran / 2 + currentShift) / width,
        (granH + currentHeight) / height,
      );

      simp = noise2D((i + 1) / rows, j / rows) + Math.random();
      const o1 = clamp(currentHeight / height + (2 * simp) / detail);
      r = Math.random();
      offsets.push(o1, o1, clamp(o1 + 0.1 * offsetTop));
      randoms.push(r, r, r);
      const c1 = [
        i * gran + currentShift - width / 2,
        currentHeight - height / 2,
        0,
      ];

      control0.push(...ctrl0, ...ctrl0, ...ctrl0);
      control1.push(...ctrl1, ...ctrl1, ...ctrl1);

      centroids.push(...c1, ...c1, ...c1);
      bary.push(0, 0, 1, 0, 1, 0, 1, 0, 0);
    }
  }
  const geometry = new Geometry(gl);

  geometry.addAttribute('position', {
    size: 3,
    data: new Float32Array(positions),
  });
  geometry.addAttribute('bary', {
    size: 3,
    data: new Float32Array(bary),
  });
  geometry.addAttribute('uv', {
    size: 2,
    data: new Float32Array(uvs),
  });
  geometry.addAttribute('offset', {
    size: 1,
    data: new Float32Array(offsets),
  });
  geometry.addAttribute('centroid1', {
    size: 3,
    data: new Float32Array(centroids),
  });
  geometry.addAttribute('control0', {
    size: 3,
    data: new Float32Array(control0),
  });
  geometry.addAttribute('control1', {
    size: 3,
    data: new Float32Array(control1),
  });
  geometry.addAttribute('random', {
    size: 1,
    data: new Float32Array(randoms),
  });
  return geometry;
}
