import { morphX } from './shaders/morph-x';
import { morphY } from './shaders/morph-y';
import { pageCurl } from './shaders/page-curl';
import { peelX } from './shaders/peel-x';
import { peelY } from './shaders/peel-y';
import { pixelize } from './shaders/pixelize';
import { polygonsFall } from './shaders/polygons-fall';
import { polygonsMorph } from './shaders/polygons-morph';
import { polygonsWind } from './shaders/polygons-wind';
import { ripple } from './shaders/ripple';
import { shutters } from './shaders/shutters';
import { slices } from './shaders/slices';
import { squares } from './shaders/squares';
import { stretch } from './shaders/stretch';
import { waveX } from './shaders/wave-x';
import { wind } from './shaders/wind';
import { dots } from './shaders/dots';
import { flyeye } from './shaders/flyeye';

// prettier-ignore
export const shaders = {
  'dots': dots,
  'flyeye': flyeye,
  'morph-x': morphX,
  'morph-y': morphY,
  'page-curl': pageCurl,
  'peel-x': peelX,
  'peel-y': peelY,
  'polygons-fall': polygonsFall,
  'polygons-morph': polygonsMorph,
  'polygons-wind': polygonsWind,
  'pixelize': pixelize,
  'ripple': ripple,
  'shutters': shutters,
  'slices': slices,
  'squares': squares,
  'stretch': stretch,
  'wave-x': waveX,
  'wind': wind,
};
