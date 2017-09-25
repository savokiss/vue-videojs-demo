<template>
  <div class="hello">
    <h1>Vue Video.js Demo</h1>
    <p>Current Stream: {{ currentStream }}</p>
    <p>Current Tech: {{ currentTech }}</p>
    <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" @ready="onPlayerReadied">
    </video-player>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      currentTech: '',
      playerOptions: {
        autoplay: false,
        controls: true,
        techOrder: ['flash', 'html5'],
        sourceOrder: true,
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        sources: [{
          type: 'rtmp/mp4',
          src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov'
        }, {
          withCredentials: false,
          type: 'application/x-mpegURL',
          src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8'
        }],
        poster: '/static/images/logo.png',
        // controlBar: {
        //   timeDivider: false, // 时间分割线
        //   durationDisplay: false, // 总时间
        //   progressControl: true, // 进度条
        //   customControlSpacer: true, // 未知
        //   fullscreenToggle: true // 全屏
        // },
      }
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
    currentStream() {
      return this.currentTech === 'Flash' ? 'RTMP' : 'HLS'
    }
  },
  methods: {
    onPlayerReadied() {
      this.currentTech = this.player.techName_
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
