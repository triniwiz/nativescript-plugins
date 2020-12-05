const { description } = require('../../package')

module.exports = {
  base: '/nativescript-plugins/',
  
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Triniwiz {N} Plugin Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API Reference',
        link: '/api-reference/'
      },
      {
        text: 'NativeScript',
        link: 'https://www.nativescript.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/api-reference/':[
        {
          title: 'API Reference',
          collapsable: false,
          children: [
            '',
            'accelerometer',
            'accordion',
            'autocomplete',
            'awesome-loaders',
            'aws-sdk-core',
            'aws-sdk-s3',
            'couchbase',
            'downloader',
            'fancy-camera',
            'fancy-list-view',
            'ffmpeg',
            'here',
            'image-cache-it',
            'image-zoom',
            'imageoptimize',
            'mongo-stitch-core',
            'mongo-stitch-services-mongodb-remote',
            'nested-scrollview',
            'pager',
            'popover',
            'pubnub',
            'pusher-beams',
            'pusher-channels',
            'radar-io',
            'sinch',
            'socketio',
            'splashscreen',
            'sse',
            'star-ratings',
            'stripe',
            'toasty',
            'twitter',
            'video-editor',
            'video-recorder',
            'webrtc',
            'youtube-player'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
