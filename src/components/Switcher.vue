<template>
  <div class="Switcher">
    <button class="switchBtn" @click="toggleLive">{{ isLive ? 'to playback' : 'to live'}}</button>
  </div>
</template>

<script>
export default {
  computed: {
    isLive() {
      return this.$route.name === 'live'
    }
  },
  methods: {
    toggleLive () {
      if(this.isLive) {
        this.$router.push('/playback')
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.switchBtn {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  right: 40px;
  top: 10px;
}
</style>
