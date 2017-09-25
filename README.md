# vue-videojs-demo

> Use videojs with vue to play RTMP && HLS streams

# Features
- Play RTMP & HLS videos
- Player support auto switch streams
- Auto detect stream & tech

# Player Options
```
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
  poster: '/static/images/logo.png'
}
```

See: http://savokiss.me/vue-videojs-demo

# Related Posts
- [WEB直播技术入门及在 Vue 中应用 video.js](https://savokiss.com/tech/web-live-tech-with-vue.html)

