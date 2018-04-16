import banner from './banner'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  name: 'VueGlide',
  output: {
    banner
  },
  plugins: [
    vue({
      css: true
    }),
    babel(),
    resolve()
  ]
}
