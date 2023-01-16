// 사이트 메인 페이지
exports.home = (ctx, next) => {
    console.log("홈페이지 호출");
    ctx.bdoy= 'Hello World';
}

// 약관 개인 정보처리방침 등 정적 페이지

exports.page = (ctx, next) => {
    // let name = ctx.params.name; // 아래와 완전 같다
    //let { name } = ctx.params;
    let page = ctx.params.page;
    let content;
    switch (page) {
        case 'terms':
            content = "이용약관";
            break;
        case 'policy':
            content = "개인정보 처리방침";
            break;
    }
    ctx.body= content;
}
//module.exports = Router;