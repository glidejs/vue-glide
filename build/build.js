import banner from './banner'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'

export default {
  name: 'VueGlide',
  output: {
    banner
  },
  plugins: [
    vue(),
    babel()
  ]
}
