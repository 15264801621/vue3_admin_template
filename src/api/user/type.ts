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
    data:{token}
}
*/
interface dataType {
  token: string;
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
