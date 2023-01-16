const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

exports.verify = async(ctx,net) =>{
    var token = ctx.requet.headers('token')
    jwt.verify(token, process.env.APP_KEY, (error, decoded)=>{
        if(error){
            ctx.body = '로그인을 해야합니다.';
            return;
        }
        next();
    })
}