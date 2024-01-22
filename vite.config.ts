import { defineConfig } from "vite";
// 引入svg 插件
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      // svg
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        // svg 放置图标的路径
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // Specify symbolId format
        symbolId: "icon-[dir]-[name]",
      }),
      // mock
      viteMockServe({
        localEnabled: command === "serve",
      }),
    ],
    // src 命名别名
    resolve: {
      alias: {
        // src 别名 @
        "@": path.resolve("./src"),
      },
    },
    // 全局变量 scss 使用
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
});
