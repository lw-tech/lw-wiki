/*
 * @Author: your name
 * @Date: 2020-04-02 16:51:05
 * @LastEditTime: 2020-04-03 15:30:03
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
        text: '产品',
        link: '/pm/',
      },
      {
        text: '设计',
        link: '/designer/',
      },
      {
        text: '前端',
        link: '/web/',
      },
      {
        text: '后台',
        link: '/servers/',
      },
      {
        text: '后勤',
        link: '/logistics/',
      },
      { text: '芦苇科技官网', link: 'https://www.luweitech.cn' },
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