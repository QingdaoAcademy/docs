import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from 'vuepress';
import { plumeTheme } from 'vuepress-theme-plume';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '技术文档',
  description: '',

  head: [
    // 配置站点图标
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/logo.png',
      },
    ],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: 'https://docs.yxzl.dev',

    /* 文档仓库配置，用于 editLink */
    docsRepo: 'QingdaoAcademy/docs',
    docsDir: 'docs',
    docsBranch: 'main',

    /* 页内信息 */
    editLink: true,
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    contributors: {
      mode: 'block',
    },
    changelog: true,

    cache: 'filesystem',

    autoFrontmatter: {
      permalink: true,
      createTime: true,
      title: true,
    },

    search: { provider: 'local' },

    markdown: {
      abbr: true, // 启用 abbr 语法  *[label]: content
      annotation: true, // 启用 annotation 语法  [+label]: content
      mark: 'lazy',
      pdf: true, // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      plot: true, // 启用隐秘文本语法 !!xxxx!!
      bilibili: true, // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      youtube: true, // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      audioReader: true, // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      icon: { provider: 'iconify' }, // 启用内置图标语法  ::icon-name::
      table: true, // 启用表格增强容器语法 ::: table
      replit: true, // 启用嵌入 replit 语法 @[replit](user/repl-name)
      jsfiddle: true, // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      demo: true, // 启用 demo 容器  ::: demo
      repl: {
        // 启用 代码演示容器
        go: true, // ::: go-repl
        rust: true, // ::: rust-repl
        kotlin: true, // ::: kotlin-repl
        python: true, // ::: python-repl
      },
      math: {
        type: 'katex',
      },
      chartjs: true, // 启用 chart.js
      echarts: true, // 启用 ECharts
      mermaid: true, // 启用 mermaid
      flowchart: true, // 启用 flowchart
      image: {
        figure: true, // 启用 figure
        lazyload: true, // 启用图片懒加载
        mark: true, // 启用图片标记
        size: true, // 启用图片大小
      },
      imageSize: 'local',
      codeTree: true,
      collapse: true,
      chat: true,
    },

    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'QingdaoAcademy/docs',
      repoId: 'R_kgDOQGR0TQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOQGR0Tc4Cw48M',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
    },
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-F7KR87K6PD',
    }),
  ],
});
