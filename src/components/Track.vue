<template>
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.glide__track {
  overflow: hidden;
}

.glide__slides {
  position: relative;
  width: 100%;
  list-style: none;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  touch-action: pan-Y;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
}

.glide__slides--dragging {
  user-select: none;
}
</style>
