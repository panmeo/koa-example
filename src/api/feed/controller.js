const {isNewFeed} = require('../../common/formatter/date');


// 전체 피드 보기
exports.index = async (ctx,next) =>{
    //let result = isNewFeed('2023-01-12 15:11');
    let query = ctx.query;
    ctx.body = query;
    
    //ctx.render('boardList',query);
}
// 새 피드 작성 처리
exports.store = (ctx, next) =>{
    let { file_name, content } = ctx.request.body;
    let body = decripString(bodyString);
    ctx.body= body;
    //ctx.body = '피드 작성 완료';
}
//피드 상세보기
exports.show = (ctx,next) =>{
    let id = ctx.params.id;
    ctx.body = `${id} 피드 상세`;
}
exports.update = (ctx, next) =>{
    let id = ctx.request.body
    ctx.body= `${id} 피드 수정`;
}

exports.delete = (ctx,next) =>{
    let id = ctx.params.id;
    ctx.body = `${id} 피드 삭제`;
}