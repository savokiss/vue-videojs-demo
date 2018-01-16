<template>
  <div class="playbackView">
    <h3>Vue Video.js Playback Demo</h3>
    <p>Current Type: <span class="badge badge-success">mp4</span></p>
    <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions">
    </video-player>

    <div class="optionsWrapper">
      <div class="form-group row">
        <label for="" class="col-sm-4 col-form-label">Playback: </label>
        <div class="col-sm-8">
          <input class="form-control" type="text" placeholder="playback url here" v-model="url">
        </div>
        <div class="w-100 mt-3 text-center">
          <button class="btn btn-primary" @click="handleApply">apply</button>
        </div>
      </div>
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
  width: 500px;
  margin: 20px auto;
}
</style>
