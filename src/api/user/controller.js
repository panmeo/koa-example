const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';
const { register, login } = require('./query');
const crypto = require('crypto');

exports.info = (ctx,next) =>{
    let id = ctx.params.id;
    ctx.body = `${id} 회원에 대한 정보`
}

exports.register = async (ctx, next) => {
    // 회원가입 처리 모듈
    let { email, password, name} = ctx.request.body;
    let result = await crypto.pbkdf2Sync(password, process.env.APP_KEY,50,100,'sha512')

    let { affectedRows } = await register(email, result.toString('base64'), name);
    if(affectedRows > 0){
        let token = await generteToken({ name });
        ctx.body = token;
    } else {
        ctx.body = {result: "fail"};
    }
    
}

exports.login = async(ctx,next) => {
    //로그인 모듈
 //   let {id, pw} = ctx.request.body;
    let { email, password} = ctx.request.body; 
    let result = await crypto.pbkdf2Sync(password,process.env.APP_KEY,50,100,'sha512')

    let item = await login(email, result.toString('base64'));
    //let result ="";

    if(item ==null) {
        ctx.body = {result: "fail"};
    } else {
        let token = await generteToken({name: item.name});
        ctx.body = token;
    }
    // 계정이 있을경우 토큰을 발급해준다.
    /*if(id=== 'admin' && pw==='1234'){
        result = await generteToken({name: 'abc'});
    } else {
        result = " 아이디 혹은 패스워드가 올바르지 않습니다.";
    }
    //let token = await generteToken({name: 'my-name'});
    ctx.body = result;
    */
}

let generteToken = (payload) =>{
    return new Promise((resolve, reject) =>{
        jwt.sign(payload, process.env.APP_KEY, (error, token) =>{
            if(error) { reject(error);}
            resolve(token);
        })
    })
}