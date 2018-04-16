import Glide from './components/Glide.vue'
import Track from './components/Track.vue'

export default {
  install (Vue) {
    Vue.component('glide', Glide)
    Vue.component('glide-track', Track)
  }
}
