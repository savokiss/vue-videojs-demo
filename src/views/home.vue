<template>
  <div class="homeView">
    <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions">
    </video-player>

    <div class="optionsWrapper">
      <input type="text" v-model="url">
      <button @click="handleApply">应用</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: '',
      playerOptions: {
        autoplay: false,
        controls: true,
        sources: [{
          type: 'video/mp4',
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
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
.optionsWrapper {
  margin-top: 20px;
}
</style>
