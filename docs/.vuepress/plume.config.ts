import { defineThemeConfig } from 'vuepress-theme-plume';
import navbar from './navbar';
import collections from './collections';

export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,

  social: [{ icon: 'github', link: 'https://github.com/QingdaoAcademy/docs' }],
  navbarSocialInclude: ['github'],
  aside: true,
  outline: [2, 3],

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

  navbar,
  collections,
});
