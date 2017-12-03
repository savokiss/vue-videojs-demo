<template>
  <div class="playbackView">
    <h1>Vue Video.js Playback Demo</h1>
    <p>Current Type: mp4</p>
    <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions">
    </video-player>

    <div class="optionsWrapper">
      <input type="text" placeholder="enter playback url" v-model="url">
      <button @click="handleApply">apply</button>
    </div>

    <Switcher></Switcher>
  </div>
</template>

<script>
import Switcher from '@/components/Switcher'
export default {
  name: 'playback',
  components: {
    Switcher
  },
  data () {
    return {
      url: '',
      playerOptions: {
        autoplay: false,
        controls: true,
        sources: [{
          type: "video/mp4",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }]
      }
    }
  },
  methods: {
    handleApply () {
      this.playerOptions.sources[0].src = this.url
    }
  }
}
</script>

<style scoped>
.playbackView {
  position: relative;
}

.optionsWrapper {
  margin-top: 20px;
}
</style>
