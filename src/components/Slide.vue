<template>
  <li class="glide__slide">
    <slot></slot>
  </li>
</template>

<script>
export default {

}
</script>

<style scoped>
.glide__slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  white-space: initial;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

.glide__slide a {
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>
