import { defineCollection, defineCollections } from 'vuepress-theme-plume';

export default defineCollections([
  defineCollection({
    type: 'doc',
    dir: 'git',
    linkPrefix: '/git',
    title: 'Git',
    sidebar: 'auto',
  }),
]);
