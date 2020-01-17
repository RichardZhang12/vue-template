let foo = (ctx) => {
  console.log(ctx.method, ctx.header.host + ctx.url);
}
module.exports = function () {
  return async function (ctx, next) {
    foo(ctx);
    await next();
  }
}