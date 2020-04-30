module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true,
        toc: { includeLevel: [2, 3, 4] }
    },
    configureWebpack: {
        resolve: {
            alias: {}
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '周报', link: '/weekly-report/' }
        ]
    }
}
