const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const render = require('koa-ejs');
const path = require('path');
const app = new Koa();
const router = new Router();

// 서버 실행 포트
const port = process.env.PORT || 3000;
//바디 파서
app.use(bodyParser({formLimit: '5mb'}));
// EJS 템플릿엔진
render(app,{
    layout: 'layouts/web',
    root: path.join(__dirname,'/views'),
    viewExt: 'ejs',
     cache: false,
});
// 라우터 설정
router.use(require('./src/routes').routes());
app.use(require('koa-static')(`${__dirname}/public`));
app.use(router.routes());
app.use(router.allowedMethods());

// 웹서버 실행
app.listen(port,() =>{
    console.log(`웹서버 구동... ${port}`);
});