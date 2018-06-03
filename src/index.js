import Glide from './components/Glide.vue'
import Track from './components/Track.vue'
import Slide from './components/Slide.vue'

export default {
  install (Vue, options) {
    Vue.component(Glide.name, Glide)
    Vue.component(Track.name, Track)
    Vue.component(Slide.name, Slide)
  }
}
