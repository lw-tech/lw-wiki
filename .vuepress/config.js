/*
 * @Author: your name
 * @Date: 2020-04-02 16:51:05
 * @LastEditTime: 2020-04-03 17:28:25
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
    sidebarDepth: 2,
    displayAllHeaders: true,
    // sidebar: [
    //   {
    //     title: 'web',   // 必要的
    //     path: '/web/',      // 可选的, 应该是一个绝对路径
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 2,    // 可选的, 默认值是 1
    //     children: [
    //       '',
    //       'web',
    //     ]
    //   },
    // ],
    sidebar: {
      '/web/': [
        '',
        'web',
      ],
      
      // fallback
      '/': [
        '',        /* / */
      ]
    }
  },
  markdown: {
    lineNumbers: true, // 在每个代码块的左侧显示行号
    toc: {
      includeLevel: [2, 3],
      markerPattern: /^\[toc\]/im, // 默认的标签是 [[toc]]，改成[toc]
    }
  },
}