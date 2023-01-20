const { pool } = require('../../data')

/**
 * 
 * @param {string} user_id (아이디)
 * @param {*} file_id 파일아이디
 * @param {*} content 내용
 * @returns 
 */
exports.store = async ( user_id, file_id,content) => {
    const query = `INSERT INTO feed
    (user_id, file_id,content)
    VALUES (?, ?,?)`;
    return await pool(query, [user_id, file_id,content]);
}
exports.index = async ( user_id, file_id,content) => {
    const query = `INSERT INTO feed
    (user_id, file_id,content)
    VALUES (?, ?,?)`;
    return await pool(query, [user_id, file_id,content]);
}
exports.show = async ( user_id, file_id,content) => {
    const query = `INSERT INTO feed
    (user_id, file_id,content)
    VALUES (?, ?,?)`;
    return await pool(query, [user_id, file_id,content]);
}
exports.update = async ( user_id, file_id,content) => {
    const query = `UPDATE INTO feed
    (user_id, file_id,content)
    VALUES (?, ?,?)`;
    return await pool(query, [user_id, file_id,content]);
}
exports.delete = async ( user_id, file_id,content) => {
    const query = `DELETE INTO feed
    (user_id, file_id,content)
    VALUES (?, ?,?)`;
    return await pool(query, [user_id, file_id,content]);
}

exports.info = async (user_id, file_id,content) => {
    const query = `SELECT * FROM feed WHERE
    user_id = ? AND file_id = ? AND content = ?`;
    let result = await pool(query, [user_id, file_id,content]);
    return (result.length <0) ? null : result[0];
}