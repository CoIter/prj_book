const plugin = require('./pluginConfig');
const nav = require('./navConfig');
const sider = require('./siderbarConfig');

module.exports = {
    title: 'BOOK',
    description: 'Just Maxsh BOOK',
    base: '/prj_book/',
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    plugins: plugin,
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: '上次更新',
        repo: 'maxsh-io/prj_book',
        editLinks: true,
        editLinkText: '修改文档！',
        docsDir: 'docs',
        nav: nav,
        sidebar: sider
    }
}
