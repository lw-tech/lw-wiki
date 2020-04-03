/*
 * @Author: your name
 * @Date: 2020-04-02 16:51:05
 * @LastEditTime: 2020-04-03 19:03:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /luwei-wiki/.vuepress/config.js
 */

// 配置参考：
// https://segmentfault.com/a/1190000020699483#item-3-2
// https://juejin.im/post/5cd7d3286fb9a0323a01d29a#heading-15

module.exports = {
  title: '芦苇科技',
  description: '芦苇科技',

  dest: './public',

  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '产品',
        link: '/docs/pm/',
      },
      {
        text: '设计',
        link: '/docs/designer/',
      },
      {
        text: '前端',
        link: '/docs/web/',
      },
      {
        text: '后台',
        link: '/docs/servers/',
      },
      {
        text: '后勤',
        link: '/docs/logistics/',
      },
      { text: '芦苇科技官网', link: 'https://www.luweitech.cn' },
    ],
    
    sidebarDepth: 2,
    displayAllHeaders: true,
    sidebar: {
      '/docs/web/': [
        '',
        'web',
      ],

      '/docs/pm/': [
        '',
        '产品原型设计规范_V1.0.202003032',
      ],

      // '/algorithms/tree/': [{
      //   title: '树',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   children: [
      //     '/algorithms/tree/1',
      //     '/algorithms/tree/2'
      //   ]
      // }],
      
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