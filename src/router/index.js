import Vue from 'vue'
import Router from 'vue-router'
// import live from '@/views/live'
// import playback from '@/views/playback'
const live = () => import('@/views/live')
const playback = () => import('@/views/playback')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'live',
      component: live
    }, {
      path: '/playback',
      name: 'playback',
      component: playback
    }
  ]
})
