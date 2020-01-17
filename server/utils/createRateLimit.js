const RateLimit = require('koa2-ratelimit').RateLimit;
const Stores = require('koa2-ratelimit').Stores;
const { redisClient } = require('./redisClient');


RateLimit.defaultOptions({
  message: 'Get out.',//自己服务器的公网ip
  store: new Stores.Redis(redisClient('122.51.74.132', 6379))
});



function rateLimit(interval, max, statusCode) {
  return RateLimit.middleware({
    interval,
    max,
    message: {
      code: 429,
      message: "send too much, please wait"
    },
    //接口被限流时，返回响应的状态码，默认429，可设置为200，message参数返回code 429，前端针对429进行处理
    statusCode //HTTP status code returned when max is exceeded. Defaults to 429.
  })
}

module.exports = {
  rateLimit
}