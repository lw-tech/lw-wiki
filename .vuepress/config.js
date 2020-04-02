/*
 * @Author: your name
 * @Date: 2020-04-02 16:51:05
 * @LastEditTime: 2020-04-02 17:09:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /luwei-wiki/.vuepress/config.js
 */
module.exports = {
  title: '芦苇科技',
  description: '芦苇科技',
  themeConfig: {
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
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'guideee',  /* /foo/one.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'test', /* /bar/three.html */
      ],
      
      // fallback
      '/': [
        '',        /* / */
        'foo',
        'bar',
      ]
    }
  }
}