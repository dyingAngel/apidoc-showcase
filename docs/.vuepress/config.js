module.exports = {
  title: 'Vuepress API Doc Theme Showcases',
  description: 'Vuepress API Doc Theme Showcases',
  theme: 'apidoc',
  base: '/apidoc-showcase/',
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Showcases', items: [
        { text: 'Default Markdown', link: '/showcase/index' },
        { text: 'Default Markdown - Custom Style', link: '/showcase/md-showcase-custom' },
        { text: 'Custom Content', link: '/showcase/md-showcase-additional' },
        { text: 'Custom Layout', link: '/showcase/md-showcase-layout' }
      ]}
    ]
  }
}