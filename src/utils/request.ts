import axios from "axios";
// el 消息提示组件
import { ElMessage } from "element-plus";
// 创建axios 实例
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});
// 请求拦截器
// 该函数简单地返回了原始的请求配置 config，即不进行任何修改。
request.interceptors.request.use((config) => {
  // config 配置对象，headers 属性请求头，给服务器端携带公共参数
  return config;
});

// 响应拦截器
// 成功回调对象 和 失败回调对象
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let msg = "";
    const status = error.response.status;
    switch (status) {
      case 401:
        msg = "token is valid";
        break;
      case 403:
        msg = "You do not have permission to access";
        break;
      case 404:
        msg = "Invalid Request URL";
        break;
      case 500:
        msg = "Server Error";
        break;
      default:
        msg = "Network Errors";
    }
    ElMessage({
      type: "error",
      message: msg,
    });
    // 失败，终结
    return Promise.reject(error);
  },
);
export default request;
