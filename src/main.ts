import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
// 使用svg 图标的配置项，引入注册脚本
import "virtual:svg-icons-register";
// 引入样式
import "@/styles/index.scss";
// 引入axios
import axios from "axios";

// 红色波浪线，没有定义ts 的类型和文件
//@ts-expect-error
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 根据不同的环境，读取变量
// console.log(import.meta.env);

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

// 引入自定义插件对象：注册整个项目全局组件
import gloalComponent from "@/components/index.ts";
app.use(gloalComponent);

// 引入 注册全局组件
// import SvgIcon from "@/components/SvgIcon/index.vue";
// app.component("SvgIcon", SvgIcon);

// mock 测试
// axios({
//   url: "/api/user/login",
//   method: "POST",
//   data: {
//     username: "admin",
//     password: "1111",
//   },
// });

app.mount("#app");
