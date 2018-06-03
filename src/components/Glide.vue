<template>
  <div class="glide">
    <slot></slot>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'
import Events from '../data/events'

export default {
  name: 'Glide',

  props: {
    settings: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    go (pattern) {
      this.glide.go(pattern)
    }
  },

  data () {
    return {
      glide: undefined
    }
  },

  mounted () {
    this.glide = new Glide(this.$el, this.settings)

    Events.forEach((event) => {
      this.glide.on(event, (...parameters) => {
        let emmiter = event.replace(/\.([a-z])/g, (m, w) => w.toUpperCase())

        this.$emit(emmiter, ...parameters)
      })
    })

    this.glide.mount()
  }
}
</script>
