import { defineNavbarConfig } from 'vuepress-theme-plume';

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '名词解释', link: '/dictionary/' },
  { text: '命令行', link: '/cli/' },
  { text: 'VS Code', link: '/vscode/' },
  { text: 'Git', link: '/git/' },
  { text: 'Python', link: 'https://python.yxzl.dev/' },
  {
    text: '贡献者',
    items: [
      { text: 'Honahec', link: 'https://honahec.cc/' },
      { text: '异想之旅', link: 'https://blog.yxzl.dev/' },
      { text: 'modenicheng', link: 'https://modenc.top/' },
    ],
  },
]);
