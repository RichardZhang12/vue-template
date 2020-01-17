const router = require('koa-router')();
const { rateLimit } = require('../../utils/createRateLimit');


//子路由1获取get请求参数
router.get('/list', rateLimit(5000, 1, 200), async (ctx) => {
  //从上下文的request对象中获取
  let request = ctx.request;
  ctx.body = {
    code: 0,
    message: '获取list'
  }
});


router.get('/modify', (ctx) => {
  ctx.body = {
    code: 0,
    message: '修改成功'
  }
})

module.exports = router;


