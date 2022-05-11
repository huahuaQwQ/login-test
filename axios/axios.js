import axios from 'axios';

//  让请求在浏览器中允许跨域携带cookie
axios.defaults.withCredentials = true;
const instance = axios.create({ baseURL: 'http://linen-fxym4pw0.vaiwan.com', timeout: 1000, headers: { 'X-Custom-Header': 'foobar' } });

// 添加超时后的处理（axios中需要你根据error信息来进行判断）
axios().catch(error => {
    const { message } = error;
    if (error.code === 'ECONNABORTED' && message.indexOf('timeout') > -1) {
        // 超时处理，可以直接弹出错误或者重新发起一次请求
        alert("请求超时！请检查网络问题后可再次发送请求");
        //  let newHttp= new Promise(function (resolve){
        //      resolve()
        //  })
        //  newHttp实例执行完成后会再次执行
        //  返回一个promise实例，同时重新发起请求，config请求配置，包扩请求头和请求参数


    }

    // 若不是超时,则返回未错误信息
    return Promise.reject(error);
})

// 请求拦截器，例如请求的时候在头部加上请求的token
instance.interceptors.request.use(config => {

    //  if (localStorage.getItem('token')) {

    //     config.headers.ACCESS_TOKEN = localStorage.getItem('token');

    //  }

    return config; //  有且必须有一个config对象被返回

}, error => {
    //   对请求错误做些什么
    console.log(error);
    return Promise.reject();
});


// 响应拦截器,例如判断服务器返回的状态，400，500啥的，其实超时可以写到这里面来，我分开写了一个比较直观
instance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况,这些自定义（需要与后台商量返回）
    error => {
        if (
            400 <= error.response.status < 500
        ) {
            alert("用户信息过期，请重新登陆");
            // 清除token
            // localStorage.removeItem("token");
            // 跳转登录
            setTimeout(() => {
                //   window.location.href = "/login";
            }, 1000);
        } else {
            if (error.response.status >= 500) {
                alert("服务器出问题了，请联系管理员");
            } else {
                alert("服务器出问题了，请联系管理员");
                return Promise.reject(error)
            }
        }
    }
);

export default instance;