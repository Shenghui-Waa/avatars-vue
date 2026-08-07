<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { drawDither, drawMeshGradient, type Pattern } from '../engine'

const props = withDefaults(
  defineProps<{
    seed: number | string
    size?: number
    pattern?: Pattern
    radius?: number | string
    colors?: string[]
    p3?: boolean
  }>(),
  {
    size: 32,
    pattern: 'mesh',
    radius: '9999px',
    p3: false,
  },
)

/** Internal render resolution. Higher than display size so the CSS blur is smooth. */
const RENDER_SIZE = 256
/** Blur radius as a fraction of display size. */
const BLUR_FRACTION = 0.06

const canvasRef = ref<HTMLCanvasElement | null>(null)

// Normalize colors to a stable string so an inline colors=[...] array
// (a new reference every render) doesn't force a redraw each time.
const colorsKey = computed(() => props.colors?.join(','))
const palette = computed(() =>
  colorsKey.value ? colorsKey.value.split(',') : undefined,
)

function draw(): void {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d', {
    colorSpace: props.p3 ? 'display-p3' : 'srgb',
  }) as CanvasRenderingContext2D | null
  if (!ctx) return
  ctx.clearRect(0, 0, RENDER_SIZE, RENDER_SIZE)
  const opts = { colors: palette.value, p3: props.p3 }
  if (props.pattern === 'dither') {
    drawDither(ctx, props.seed, RENDER_SIZE, opts)
  } else {
    drawMeshGradient(ctx, props.seed, RENDER_SIZE, opts)
  }
}

onMounted(draw)
watch(
  [() => props.seed, () => props.pattern, () => props.p3, palette],
  draw,
)

// The dither is crisp; only the mesh gets the signature soft blur.
const blurPx = computed(() =>
  props.pattern === 'dither'
    ? 0
    : Math.max(1, Math.round(props.size * BLUR_FRACTION)),
)

const wrapperStyle = computed(() => ({
  display: 'inline-block',
  overflow: 'hidden',
  borderRadius:
    typeof props.radius === 'number'
      ? `${props.radius}px`
      : props.radius,
  width: `${props.size}px`,
  height: `${props.size}px`,
}))

const canvasStyle = computed(() => {
  const s: Record<string, string> = {
    width: '100%',
    height: '100%',
    display: 'block',
  }
  if (blurPx.value > 0) {
    s.filter = `blur(${blurPx.value}px)`
  }
  return s
})
</script>

<template>
  <span :style="wrapperStyle">
    <canvas
      ref="canvasRef"
      :width="RENDER_SIZE"
      :height="RENDER_SIZE"
      :style="canvasStyle"
    />
  </span>
</template>
