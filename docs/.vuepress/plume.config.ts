import { defineThemeConfig } from 'vuepress-theme-plume';
import navbar from './navbar';
import collections from './collections';

export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true, // 配置 深色模式

  social: [{ icon: 'github', link: '/' }],
  navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  copyright: {
    license: 'CC-BY-NC-SA-4.0',
  },

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  // footer: {
  //   message:
  //     'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
  //   copyright: "",
  // },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'docs',
    description: '',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  collections,
});
