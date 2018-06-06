# vue-videojs-demo
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsavokiss%2Fvue-videojs-demo.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsavokiss%2Fvue-videojs-demo?ref=badge_shield)


> Use video.js with vue to play RTMP && HLS streams && playback

## Get Started

See: http://savokiss.me/vue-videojs-demo

**In RTMP you'll see a cartoon && in HLS you'll see a dummy video**

**Just switch tech to see the differences**

## Features
- Play RTMP & HLS videos
- Auto detect stream & tech
- Support auto switch streams
- Support manual switch techs
- Support custom stream link
- Support playback link( see [http://savokiss.me/vue-videojs-demo/#/playback](http://savokiss.me/vue-videojs-demo/#/playback))
- Use local swf file

## Live Player Options
```javascript
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

To use local swf file, copy the swf file to `/static/media/` folder && add:
```javascript
   swf: '/static/media/video-js.swf'
```

see source: [live.vue](https://github.com/savokiss/vue-videojs-demo/blob/master/src/views/live.vue)

## HLS Encryption Issue
> see [#1150](https://github.com/videojs/videojs-contrib-hls/issues/1150)

if you encounter the hls encryption issue, use the `videojs-contrib-hls.js` plugin instead.

edit `main.js`:
```javascript
// import 'videojs-contrib-hls/dist/videojs-contrib-hls'
import 'videojs-contrib-hls.js/src/videojs.hlsjs'
```

## Related Posts
- [WEB直播技术入门及在 Vue 中应用 video.js](https://savokiss.com/tech/web-live-tech-with-vue.html)

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsavokiss%2Fvue-videojs-demo.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsavokiss%2Fvue-videojs-demo?ref=badge_large)

