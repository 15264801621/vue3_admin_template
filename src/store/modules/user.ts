// 创建用户相关的小仓库
import { defineStore } from "pinia";
// api 中的登录接口
import { reqLogin } from "@/api/user";
import { UserState } from "./types/type";
import { SET_TOKEN, GET_TOKEN } from "@/utils/token";
import type { loginForm, loginResponseData } from "@/api/user/type";
// 选择式 api
const useUserStore = defineStore("User", {
  // 存储数据 函数返回的数据类型
  state: (): UserState => {
    return {
      // 从本地中获取，刷新等都不改变该仓库的值
      token: GET_TOKEN(),
    };
  },
  // 异步|逻辑
  actions: {
    // 用户登录方法,注：箭头函数没有this 指向
    async userLogin(data: loginForm) {
      // 调用登录接口
      const result: loginResponseData = await reqLogin(data);
      // 登录请求：成功 200-> token
      // 登录请求：失败201-> 登录失败错误的信息
      if (result.code === 200) {
        // 登录成功
        this.token = result.data.token as string;
        // 本地化持久存储token
        SET_TOKEN(result.data.token as string);
        // console.log(this.token);
        // 返回成功的对象
        return Promise.resolve();
      } else {
        // 登录失败 返回失败的promise
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  //
  getters: {},
});
export default useUserStore;
