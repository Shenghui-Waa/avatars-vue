# @tsyanst/avatars-vue

Generative gradient avatars for Vue 3. Every seed renders a unique mesh gradient (or a crisp ordered dither) — deterministic, no stored images, no network.

## Install

```bash
npm i @tsyanst/avatars-vue
```

Requires Vue >= 3.

## Usage

```vue
<script setup>
import { GradientAvatar } from '@tsyanst/avatars-vue'
</script>

<template>
  <GradientAvatar seed="jane@example.com" :size="96" />
</template>
```

Give it any string or number (user id, email, username) and it paints a unique gradient on a `<canvas>`. Same seed always yields the same gradient.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `seed` | `string \| number` | required | Any value; each unique seed is a unique gradient |
| `size` | `number` | `32` | Rendered size in pixels |
| `pattern` | `"mesh" \| "dither"` | `"mesh"` | `mesh` is the soft gradient; `dither` is an ordered dither of the same palette |
| `radius` | `number \| string` | `"9999px"` | Corner radius. Number = px, string = any CSS length. Defaults to full circle |
| `colors` | `string[]` | — | Your own hex palette instead of seed-derived harmony |
| `p3` | `boolean` | `false` | Render in Display P3 wide-gamut color space |

## Engine helpers

The framework-agnostic engine is also exported:

```ts
import {
  generatePalette,
  gradientToDataURL,
  gradientToBlob,
  seedFromString,
  toSeed,
} from '@tsyanst/avatars-vue'

// 512x512 PNG data URL
const src = gradientToDataURL('jane@example.com', { size: 512 })

// Just the colors behind a seed
const { colors, harmony } = generatePalette('jane@example.com')
```

## License

MIT
