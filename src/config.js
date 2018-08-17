const isProduction = process.env.NODE_ENV === 'production'

export const SWF_URL = isProduction ? '/vue-videojs-demo/static/media/video-js.swf' : '/static/media/video-js.swf'

export const POSTER_URL = isProduction ? '/vue-videojs-demo/static/images/logo.png' : '/static/images/logo.png'
