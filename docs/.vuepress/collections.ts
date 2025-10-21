import { defineCollection, defineCollections } from 'vuepress-theme-plume';

export default defineCollections([
  defineCollection({
    type: 'doc',
    dir: 'git',
    linkPrefix: '/git',
    title: 'Git',
    sidebar: [
      'introduction-of-git',
      'git-basics',
      'git-with-vscode',
      'github-overview',
    ]
  }),
]);
