import axios from 'axios'

//创建axios实例
const service =axios.create({
    baseURL:'接口地址',
    timeout:6000,//超时毫秒
})

//请求拦截器：每次发请求前检查是否有错误或权限
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器：对接口响应的数据做判断，处理数据与异常
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response)
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


  //暴露出service实例，接口的地方引入service

  export default service