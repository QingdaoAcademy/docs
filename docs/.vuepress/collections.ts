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
        items: ['', 'install', 'folder-and-explorer', 'cli'],
      },
      {
        text: '专门配置',
        items: ['python'],
      },
    ],
  }),
]);
