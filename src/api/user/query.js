const { pool } = require('../../data')

/**
 * 
 * @param {string} email 메일(아이디)
 * @param {*} password 비밀번호 
 * @param {*} name 이름
 * @returns 
 */
exports.register = async ( email, password, name) => {
    const query = `INSERT INTO user
    (email, password, name)
    VALUES (?, ?, ?)`;
    return await pool(query, [email, password, name]);
}

exports.login = async (email, password) => {
    const query = `SELECT * FROM user WHERE
    email = ? AND password = ?`;
    let result = await pool(query, [email, password]);
    return (result.length <0) ? null : result[0];
}