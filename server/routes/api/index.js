const Router = require('koa-router');
let router = new Router();

//装载所有子路由
router.use('/api', require('./buiness').routes());


module.exports = router;