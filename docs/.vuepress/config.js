module.exports = {
    title: 'BOOK',
    description: 'Just Maxsh BOOK',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' },
                    { text: '亚洲', items: [
                            { text: 'Chinese', link: '/language/chinese/' },
                            { text: 'Japanese', link: '/language/japanese/' },
                        ] },
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
            '/css/': [
                '',     /* /foo/ */
                'css1',  /* /foo/one.html */
                'css2'   /* /foo/two.html */
            ],

            '/javascript/': [
                '',      /* /bar/ */
                'javascript1', /* /bar/three.html */
                'javascript2'   /* /bar/four.html */
            ],

            // fallback
            '/': [
                '',        /* / */
                '/about/', /* /contact.html */
                '/about/test'    /* /about.html */
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }
}
