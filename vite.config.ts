import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    viteCompression()
  ],

  base: './',//打包路径

  // 别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
  // 全局css 
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import './src/assets/style/var.less';`
      }
    }
  },
  // 代理服务
  server: {
    port: 3005,//启动端口
    proxy: {
      // 第一个代理
      '/api/': { // 匹配到啥来进行方向代理
        target: 'http://47.115.62.24:9020', // 代理的目标
        rewrite: (path) => path.replace(/^\/api/, '') // 如果不需要api 直接把路径上的api 替换成空，这个
      }
    },
  },
  build: {
    //  传递给 Terser 的更多 minify 选项。
    terserOptions: {
      compress: {
        // 打包自动删除console
        drop_console: true,
        // 对代码压缩的次数，默认是1，压缩次数越多，时间越长
        passes: 100,
      }
    },

    rollupOptions: {

      output: {
        manualChunks: {
          // reactAndRedux: ['react', 'react-redux', 'redux-saga', 'react-router-config'],
          // reactDom: ['react-dom'],
          // antd: ['antd'],
          // connectReactRouter: ['connected-react-router'],
          // highlight: ['highlight.js'],
          // otherStores: ['marked', 'react-tsparticles', 'react-typewriter-hook', 'axios'],
          // reactRouterDom: ['react-router-dom'],
          // reduxActions: ['redux-actions'],
          // console.log(id,'--------');
          // return id.toString()
          // if (id.includes('node_modules')) {
          //   return id.toString().split('node_modules/')[1].split('/')[0].toString();
          // }
        }
      }
    }
  }
})
