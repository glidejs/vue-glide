<template>
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GlideTrack',
}
</script>
