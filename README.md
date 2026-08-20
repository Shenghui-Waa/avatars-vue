# avators-vue

基于 [`@outpacelabs/avatars`](https://github.com/outpacelabs/avatars.git) 重构修改后的 Vue 版本

## React 原始版本
- 位于 `packages-react/avatars`
- [**`README`↗**](packages-react/avatars/README.md)
- 快速开始
  ```bash
  npm i @outpacelabs/avatars   # or: pnpm add / yarn add / bun add
  ```
  ```tsx
  import { GradientAvatar } from "@outpacelabs/avatars";

  function UserAvatar({ user }) {
    return <GradientAvatar seed={user.id} size={40} />;
  }
  ```

## Vue 重构版本
- 位于 `packages-vue/avatars`
- [**`README`↗**](packages-vue/avatars/README.md)
- 快速开始
  ```bash
  npm i @tsyanst/avatars-vue
  ```
  ```vue
  <script setup lang="ts">
  import { GradientAvatar } from '@tsyanst/avatars-vue'
  </script>

  <template>
    <GradientAvatar seed="jane@example.com" :size="96" />
  </template>
  ```

## ⚖ License
`MIT.` By Tsyanst. Use For Free.