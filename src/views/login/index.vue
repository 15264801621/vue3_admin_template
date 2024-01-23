<template>
  <div class="login_container">
    <!-- 分成两半，一半各占12列，左侧为表单 -->
    <!-- :xs 系统尺寸小于768 第一个一份都没有  右侧的占24 -->
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到运营平台</h2>
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <!-- 密码 show-password -->
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              @click="login"
              class="login_btn"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { Lock, User } from "@element-plus/icons-vue";
// @ts-ignore
import { useRouter } from "vue-router";
// 引入用户相关的小仓库
import useUserStore from "@/store/modules/user";
// 引入时间的函数
import { getTime } from "@/utils/time";
// 通知
// @ts-ignore
import { ElNotification } from "element-plus";

let useStore = useUserStore();
// @ts-ignore
import { reactive, ref } from "vue";
let $router = useRouter();
let loading = ref(false);
let loginForm = reactive({
  username: "",
  password: "",
});
// 获取表单元素
let loginForms = ref();
// 自定义校验函数
// 自动注入参数,rule:校验规则对象，value:表单元素内容，callback:符合条件放行，不符合注入错误信息
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5 && value.length <= 8) {
    callback();
  } else {
    callback(new Error("账号长度在5-8个字符"));
  }
};
// 规则
const rules = {
  username: [{ trigger: "change", validator: validatorUserName }],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
  ],
};

// 点击登录按钮后操作
const login = async () => {
  // 表单验证,保证校验通过后发送请求
  await loginForms.value.validate();
  // 通知仓库，发送登录请求
  // 请求成功，跳转到首页，展示首页
  // 请求失败，弹出登录失败信息
  try {
    loading.value = true;
    await useStore.userLogin(loginForm);
    // 登录成功，跳转到首页
    ElNotification({
      title: `Hi ${getTime()}好`,
      message: "登录成功",
      type: "success",
      duration: 1000,
    });
    loading.value = false;
    $router.push("/");
  } catch (error: any) {
    // console.log(error.message);
    loading.value = false;
    // 登录失败 弹出信息
    ElNotification({
      title: "Error",
      message: error.message,
      type: "error",
      duration: 3000,
    });
  }
};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    top: 30vh;
    width: 80%;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      font-size: 40px;
      color: white;
    }
    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
