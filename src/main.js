// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-flash'
import 'videojs-contrib-hls/dist/videojs-contrib-hls'
// import 'videojs-contrib-hls.js/src/videojs.hlsjs'

import pkg from '../package.json'

Vue.config.productionTip = false
Vue.use(VueVideoPlayer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

console.log(`${pkg.name} v${pkg.version} is running`)
