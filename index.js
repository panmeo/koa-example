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
app.use(router.allowedMethods());/*
router.get('/',(ctx,next) => {
    ctx.body = 'Hello wwwworasdffaiviinicnld';
});
router.get('/sitemap',(ctx,next) => {
    ctx.body = '사이트맵';
})
// :name 은 파라미터
router.get('/page/:name', (ctx,next) => {
    let name = ctx.params.name;
    ctx.body = `${name} 페이지`;
})*/

//app.use(ctx => {
 //   ctx.body = 'Hello Worlddddddddd';
//});

// 웹서버 실행
app.listen(port,() =>{
    console.log(`웹서버 구동... ${port}`);
});