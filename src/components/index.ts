// 全局注册用于
// 负责引入组件
// 对外暴露插件对象
import SvgIcon from "@/components/SvgIcon/index.vue";
import Pagination from "@/components/Pagination/index.vue";

// 全局组件的对象
const allGloablcomponents = {
  SvgIcon,
  Pagination,
};
// 得到所有的key值，放入到数组里，进行打印
// Object.keys(allGloablcomponents).forEach((key) => {
//   console.log(key);
// });

export default {
  // 在main.ts 使用app.use() 会触发install方法
  install(app) {
    Object.keys(allGloablcomponents).forEach((key) => {
      app.component(key, allGloablcomponents[key]);
    });
  },
};
