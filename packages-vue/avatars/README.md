# @tsyanst/avatars-vue

Generative gradient avatars for Vue 3. Every seed (string or number) renders a unique mesh gradient or a crisp ordered dither — deterministic, no stored images, no network.

## Install

```bash
npm i @tsyanst/avatars-vue
```

Requires Vue >= 3.

## Usage

```vue
<script setup lang="ts">
import { GradientAvatar } from '@tsyanst/avatars-vue'
</script>

<template>
  <GradientAvatar seed="jane@example.com" :size="96" />
</template>
```

Give it any string or number (user id, email, username). Same seed always yields the same gradient.

## Props

| Prop     | Type                      | Default     | Description                                    |
|----------|---------------------------|-------------|------------------------------------------------|
| `seed`   | `string \| number`        | required    | Any value; each unique seed is a unique gradient |
| `size`   | `number`                  | `32`        | Rendered size in pixels                        |
| `pattern`| `"mesh" \| "dither"`     | `"mesh"`    | Mesh for soft gradient; dither for crisp ordered dither |
| `radius` | `number \| string`        | `"9999px"`  | Corner radius. Number in px, string as CSS value |
| `colors` | `string[]`                | —           | Custom hex palette instead of seed-derived harmony |
| `p3`     | `boolean`                 | `false`     | Render in Display P3 wide-gamut color space     |

## Examples

```vue
<!-- Circle (default) -->
<GradientAvatar seed="alice" :size="96" />

<!-- Square -->
<GradientAvatar seed="bob" :size="96" :radius="0" />

<!-- Rounded square -->
<GradientAvatar seed="carol" :size="96" :radius="16" />

<!-- Dither pattern -->
<GradientAvatar seed="dave" :size="96" pattern="dither" />

<!-- Custom brand colors -->
<GradientAvatar
  :seed="42"
  :size="96"
  :colors="['#4f46e5', '#06b6d4', '#ec4899']"
/>

<!-- P3 wide gamut -->
<GradientAvatar seed="eve" :size="96" :p3="true" />
```

## Engine helpers

Framework-agnostic engine also exported:

```ts
import {
  generatePalette,
  gradientToDataURL,
  gradientToBlob,
  renderGradient,
  drawMeshGradient,
  drawDither,
  seedFromString,
  toSeed,
} from '@tsyanst/avatars-vue'

// 512x512 PNG data URL
const src = gradientToDataURL('jane@example.com', { size: 512 })

// Colors and harmony behind a seed
const { colors, harmony } = generatePalette('jane@example.com')
```

## License

MIT
