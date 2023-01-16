// 클라이언트의 요청 ip와 url은 코솔에 단순히 출력해주는 프로그램
exports.myLogging = async (ctx, next) => {
    let clientIp = ctx.request.ip;
    let url = ctx.originalUrl;
    console.log(`${clientIp.replace("::ffff:","")} 주소에서 요청 :  ${url}`);
    await next();
}