export { default as GradientAvatar } from './components/GradientAvatar.vue'

export {
  drawDither,
  drawMeshGradient,
  generatePalette,
  gradientToBlob,
  gradientToDataURL,
  renderGradient,
  seedFromString,
  toSeed,
} from './engine'

export type {
  DrawOptions,
  ExportOptions,
  GradientContext,
  GradientPalette,
  Harmony,
  PaletteOptions,
  Pattern,
  RenderOptions,
} from './engine'
