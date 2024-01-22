// 统一管理用户相关的接口
import request from "@/utils/request";
// 导入类型接口
// import type 导入的类型信息
import type {
  loginForm,
  loginResponseData,
  userInfoResponseData,
} from "./type";

// 枚举接口地址
// 在 TypeScript 中，enum（枚举）是一种用于定义一组命名的常量的数据类型
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
  LOGOUT_URL = "/user/logout",
}

// 登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);

// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL);

// 退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL);
