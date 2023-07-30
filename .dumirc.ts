import { defineConfig } from 'dumi';

const repo = 'xiaoxiong'

export default defineConfig({
  title: 'xiaoxiong',

  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  // more config: https://d.umijs.org/config
  themeConfig: {
    name: 'JasenYa',
  },
});
