<template>
  <div class="hello">
    <h1>Vue Video.js Demo</h1>
    <p>Current Stream: {{ currentStream }}</p>
    <p>Current Tech: {{ currentTech }}</p>
    <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" @ready="onPlayerReadied">
    </video-player>
    <div class="selectWrapper">
      Switch Tech:
      <select name="switch" v-model="currentTech" @change="changeTech">
        <option value="Html5">Html5</option>
        <option value="Flash">Flash</option>
      </select>
    </div>

    <h2>Enter your streams link below</h2>
    <div class="inputWrapper" v-if="currentStream==='RTMP'">
      RTMP: <input type="text" v-model="streams.rtmp">
    </div>
    <div class="inputWrapper" v-else>
      HLS: <input type="text" v-model="streams.hls">
    </div>
    <div class="buttonWrapper">
      <button type="button" @click="enterStream">Apply</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      initialized: false,
      currentTech: '',
      streams: {
        rtmp: '',
        hls: ''
      },
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
        poster: '/vue-videojs-demo/static/images/logo.png',
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
    player () {
      return this.$refs.videoPlayer.player
    },
    currentStream () {
      return this.currentTech === 'Flash' ? 'RTMP' : 'HLS'
    }
  },
  methods: {
    onPlayerReadied () {
      if(!this.initialized) {
        this.initialized = true
        this.currentTech = this.player.techName_
      }
    },
    enterStream () {
      this.playerOptions.sources[1].src = this.streams.hls
      this.playerOptions.sources[0].src = this.streams.rtmp
      this.playerOptions.autoplay = true
    },
    changeTech() {
      if(this.currentTech === 'Html5') {
        this.playerOptions.techOrder = ['html5']
      } else if(this.currentTech === 'Flash') {
        this.playerOptions.techOrder = ['flash']
      }
      this.playerOptions.autoplay = true
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

.selectWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 30px;
  margin: 20px;
  vertical-align: baseline;
}

.inputWrapper {
  margin: 20px;
}


.inputWrapper input {
  width: 200px;
}

.buttonWrapper {
  text-align: center;
}
</style>
