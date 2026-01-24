import { defineCollection, defineCollections } from 'vuepress-theme-plume';

export default defineCollections([
  defineCollection({
    type: 'doc',
    dir: 'git',
    linkPrefix: '/git',
    title: 'Git',
    sidebar: [
      '',
      'introduction-of-git',
      'git-installation',
      'git-basics',
      'github-overview',
      'git-with-vscode',
    ],
  }),
  defineCollection({
    type: 'doc',
    dir: 'dictionary',
    linkPrefix: '/dictionary',
    title: '名词解释',
    sidebar: 'auto',
  }),
  defineCollection({
    type: 'doc',
    dir: 'cli',
    linkPrefix: '/cli',
    title: '命令行',
    sidebar: [
      {
        text: '基础内容',
        items: ['', 'launch-cli', 'path'],
      },
    ],
  }),
  defineCollection({
    type: 'doc',
    dir: 'vscode',
    linkPrefix: '/vscode',
    title: 'VS Code',
    sidebar: [
      {
        text: '通用',
        items: ['', 'install', 'folder-and-explorer', 'terminal'],
      },
      {
        text: '专门配置',
        items: ['python', 'cpp'],
      },
    ],
  }),
  defineCollection({
    type: 'doc',
    dir: 'env-configuration',
    linkPrefix: '/env-configuration',
    title: '开发环境配置',
    sidebar: [
      '',
      {
        text: 'Python',
        items: [
          {
            text: 'Python 环境配置',
            link: 'https://python.yxzl.dev/jvvxy8eb/',
          },
        ],
      },
      {
        text: 'C++',
        items: ['mingw64'],
      },
    ],
  }),
]);
