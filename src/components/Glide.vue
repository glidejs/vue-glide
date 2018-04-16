<template>
  <div class="glide">
    <slot></slot>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  props: {
    settings: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    mount () {
      this.glide.mount()
    }
  },

  data () {
    return {
      glide: new Glide(this.$el, this.settings)
    }
  },

  created () {
    this.glide.on('mount.before', () => {
      this.$emit('mount.before')
    })
  },

  mounted () {
    this.mount()
  }
}
</script>

<style scoped>
.glide {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.glide * {
  box-sizing: inherit;
}
</style>
