jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  // 每次修改配置，该值需要增加，否则不会生效。
  // 默认每隔 5 分钟自动下载配置，若想立即验证，可通过隐私模式访问。
  ver: '108',

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 60
  },

  // 节点配置
  node_map: {
    'mysite': {
      label: '当前站点',
      lines: {
        [location.host]: 1,
      }
    },
    // 该节点用于加载大体积的静态资源
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        'jsproxy.sweet-rain-9527.cms42.workers.dev': 1
      }
    }
  },

  /**
   * 默认节点
   */
  // node_default: 'mysite',
  node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  assets_cdn: 'https://cdn.jsdelivr.net/gh/cms42/cms42.github.io@master/proxy/assets/',

  // 本地测试时打开，否则访问的是线上的
  // assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index-v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<!-- custom html -->',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://php.net/'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})