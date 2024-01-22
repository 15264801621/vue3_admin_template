<template>
  <div class="box">
    <el-button type="primary" :icon="Plus">增加按钮</el-button>
    <el-pagination layout="prev, pager, next, jumper" :total="1000" />
    <!-- svg ：图标外层容器结点，内部需与use 标签结合使用-->
    <svg style="width: 100px; height: 100px">
      <!-- xlink:href 指定使用图标 -->
      <!-- use 标签的fill 属性，可设置图标的颜色 -->
      <use xlink:href="#icon-phone" fill="pink"></use>
    </svg>
    <svg-icon name="home" color="pink" width="100px" height="100px"></svg-icon>
    <Pagination></Pagination>
    <h1>测试scss 样式为红色</h1>
    <h1>测试axios 二次封装</h1>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import { Plus } from "@element-plus/icons-vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
// 组合式api
import { onMounted } from "vue";
import { reqLogin } from "@/api/user/index.ts";
onMounted(() => {
  reqLogin({ username: "admin", password: "111111" }).then((res) => {
    console.log("返回的数据：", res);
  });
});

// 组件挂载完毕 测试请求
// onMounted(() => {
//   request({
//     // axios 基础路径带有 api 了
//     url: "/api/user/login",
//     method: "POST",
//     data: {
//       username: "admin",
//       password: "111111",
//     },
//   }).then((res) => {
//     console.log(res);
//   });
// });
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background: black;
  h1 {
    color: $color;
  }
}
</style>
