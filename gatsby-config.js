module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        theme: {
          'primary-color': '#409EFF',
        },
      }
    }
  ],
  siteMetadata: {
    title: 'DipperMap',
    description: '',
    siteUrl: 'https://dippermap.alipay.com',
    githubUrl: 'https://github.com/antvis/DipperMap',
    navs: [
      {
        slug: 'demo',
        title: {
          zh: '配置页面',
          en: 'MyApp'
        },
      },
      {
        slug: 'api',
        title: {
          zh: 'API文档',
          en: 'API Doc'
        },
      },
    ],
    showSearch: false, // 是否展示搜索框
    showChinaMirror: false, // 是否展示国内镜像链接
    showAntVProductsCard: false, // 是否展示 AntV 系列产品的卡片链接
    showLanguageSwitcher: false, // 用于定义是否展示语言切换
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    playground: {
      container: '<div id="container" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");'
    },
    redirects: []
  }
};
