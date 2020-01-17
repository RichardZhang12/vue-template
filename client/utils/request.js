import axios from 'axios';
//后期可以引入store中存储的token数据，如果有，在请求拦截中添加上







// #创建axios实例
let service = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 3000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false,
  // `headers` 是即将被发送的自定义请求头
  // headers: {'X-Requested-With': 'XMLHttpRequest'},
})




// 以下是可用的实例方法。指定的配置将与实例的配置合并
// axios#request(config)
// axios#get(url[, config])
// axios#delete(url[, config])
// axios#head(url[, config])
// axios#post(url[, data[, config]])
// axios#put(url[, data[, config]])
// axios#patch(url[, data[, config]])



// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service;