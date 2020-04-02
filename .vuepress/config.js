/*
 * @Author: your name
 * @Date: 2020-04-02 16:51:05
 * @LastEditTime: 2020-04-02 20:47:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /luwei-wiki/.vuepress/config.js
 */
module.exports = {
  title: '芦苇科技',
  description: '芦苇科技',
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'bar',
        link: '/bar/',
      },
      {
        text: 'foo',
        link: '/foo/',
      },
      {
        text: '产品',
        link: '/pm/',
      },
      { text: 'External', link: 'https://google.com' },
    ],
    // sidebar: 'auto',
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/',
          'guideee',
        ]
      },
    ],
    // sidebar: {
    //   '/foo/': [
    //     '',     /* /foo/ */
    //     'guideee',  /* /foo/one.html */
    //   ],

    //   '/bar/': [
    //     '',      /* /bar/ */
    //     'test', /* /bar/three.html */
    //   ],
      
    //   // fallback
    //   '/': [
    //     '',        /* / */
    //     'foo',
    //     'bar',
    //   ]
    // }
  }
}