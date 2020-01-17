const fs = require('fs');
const path = require('path');

const routerCtlTranshferToWebRouter = (req, res, next) => {
  // const htmlPath = getHtmlPath(req.path);
  const htmlPath = path.resolve(__dirname, '../public/index.html');

  fs.readFile(htmlPath, 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open index.html file.');
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(content);
  });
};

// const not404MiddleWare = (req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// };

/**
 * 
 * @param {* 访问类型} type 
 */
function notFount404(type = 'api') {

  return async function (ctx, next) {
    if (type === 'page') {
      return routerCtlTranshferToWebRouter;
    }

    return not404MiddleWare;
  }

}

module.exports = notFount404;