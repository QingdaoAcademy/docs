import { defineCollection, defineCollections } from 'vuepress-theme-plume';

export default defineCollections([
  defineCollection({
    type: 'doc',
    dir: 'git',
    linkPrefix: '/git',
    title: 'Git',
    sidebar: [
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
      '',
      'launch-cli',
      'path',
    ],
  }),
]);
