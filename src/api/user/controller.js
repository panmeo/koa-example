const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

exports.info = (ctx,next) =>{
    let id = ctx.params.id;
    ctx.body = `${id} 회원에 대한 정보`
}

exports.register = async (ctxx, next) => {
    // 회원가입 처리 모듈

    let token = await generteToken({name: 'my-name'});
    ctx.body = token;
}

exports.login = async(ctx,next) => {
    //로그인 모듈
    let {id, pw} = ctx.request.body;
    
    let result ="";
    // 계정이 있을경우 토큰을 발급해준다.
    if(id=== 'admin' && pw==='1234'){
        result = await generteToken({name: 'abc'});
    } else {
        result = " 아이디 혹은 패스워드가 올바르지 않습니다.";
    }
    //let token = await generteToken({name: 'my-name'});
    ctx.body = result;
}

let generteToken = (payload) =>{
    return new Promise((resolve, reject) =>{
        jwt.sign(payload, SECRET_KEY, (error, token) =>{
            if(error) { reject(error);}
            resolve(token);
        })
    })
}