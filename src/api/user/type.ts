// 定义相关的数据类型

// 登录接口需要携带的参数ts 类型
export interface loginForm {
  username: string;
  password: string;
}

// 登录接口返回的数据类型
/* 
{
    code:200,
    data:{token / message}
}
*/
interface dataType {
  // token?: string;：表示一个名为 token 的可选字符串属性。
  // 使用这个接口描述的数据类型时，可以包含一个名为 token 的字符串属性，也可以不包含
  token?: string;
  message?: string;
}

export interface loginResponseData {
  code: number;
  data: dataType;
}

// userInfo 数据类型
// 数组里 放入的是string类型      string[];
interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
interface user {
  checkUser: userInfo;
}
export interface userInfoResponseData {
  code: number;
  data: user;
}
