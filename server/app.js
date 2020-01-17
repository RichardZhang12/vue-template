const koa = require('koa');
const app = new koa();
const log = require('./middleware/foo');
const router = require('./routes/api/index');
const static = require('koa-static');
const path = require('path')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const cors = require('koa2-cors')

/* 首先在router的api的index.js文件下，所有接口前统一添加 "/api " 路径，然后通过该插件，当地址为api开头是
访问koa中定义的接口，而不是vue-router中定义的路由了 */
app.use(historyApiFallback({ whiteList: ['/api'] }));
app.use(cors())

app.use(static(
  path.join(__dirname, './public')
))

app.use(log());//添加中间件

app.use(router.routes())//加载路由中间件



app.listen(4000, () => {
  console.log('[demo] route-use-middleware is starting at port 4000')
});