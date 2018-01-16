<template>
  <div class="Switcher">
    <button class="btn btn-primary switchBtn" @click="toggleLive">{{ isLive ? 'to playback' : 'to live'}}</button>
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
  text-align: center;
  position: absolute;
  right: 0px;
  top: 10px;
}
</style>
