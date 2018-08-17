// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueVideoPlayer from 'vue-video-player'
// videojs
import videojs from 'video.js'

import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

window.videojs = videojs

// 由于 import 必须置顶，此句必须 使用 window.videojs, 所以这里用 require
require('videojs-contrib-hls/dist/videojs-contrib-hls')
// require('videojs-contrib-hls.js/src/videojs.hlsjs')

require('videojs-flash')

Vue.config.productionTip = false
Vue.use(VueVideoPlayer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
