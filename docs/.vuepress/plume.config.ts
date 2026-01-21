import { defineThemeConfig } from 'vuepress-theme-plume';
import navbar from './navbar';
import collections from './collections';

export default defineThemeConfig({
  logo: '/logo.png',

  appearance: true,

  social: [{ icon: 'github', link: 'https://github.com/QingdaoAcademy/docs' }],
  navbarSocialInclude: ['github'],
  aside: true,
  outline: [2, 3],

  copyright: {
    license: 'CC-BY-NC-SA-4.0',
  },

  createTime: true,

  /* 站点页脚 */
  // footer: {
  //   message:
  //     'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
  //   copyright: "",
  // },

  // navbar,
  collections,
});
