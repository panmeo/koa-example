const {create, show} = require('./query');
const fs = require('fs')

//const { pool } = require('../../data')

// 파일 업로드
exports.upload = async(ctx) => {
    let file = ctx.request.file;
    // ctx.body = file;

//    const query = `INSERT INTO files
//    (original_name, file_path, file_size)
//    VALUES (?,?,?)`;

    let { affectedRows, insertId } = await pool(query, [file.originalname,file.path,file.size]);
    if(affectedRows > 0){
        ctx.body = {
        result: "ok",
        id: insertId
        };
    }else {
        ctx.body = {
            result: "fail"
        };
    }
}

exports.download = async(ctx) => {
    let { id } = ctx.params;

//    const query = `SELECT * FROM files WHERE id = ?`;
//    let result = await pool(query, [id]);
    let item = await show(id);

    if(item== null) {
        ctx.body = {result: "fail"};
        return;
    }
//    if(result.length < 1) {
//        ctx.body = {result: "fail"};
//        return;
    
    //let item = result[0];

    ctx.response.set("content-disposition", `attachment: filename=${item.original_name}`);
    ctx.staatusCode = 200;
    ctx.body = fs.createReadStream(item.file_path);
}