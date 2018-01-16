<template>
  <div id="app">
    <div class="container">
      <div class="star">
        <span class="badge badge-light">Github</span>
        <a href="http://github.com/savokiss/vue-videojs-demo" target="_blank">
          <img src="https://img.shields.io/github/stars/savokiss/vue-videojs-demo.svg?style=social" alt="">
        </a>
      </div>
      <div class="routerWrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
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

.star {
  width: 100%;
  text-align: right;
}

.routerWrapper {
  margin-top: 20px;
}
</style>
