const { pool } = require('../../data')

/**
 * 
 * @param {string} email 메일(아이디)
 * @param {*} password 
 * @param {*} name 
 * @returns 
 */
exports.register = async ( email, password, name) => {
    const query = `INSERT INTO user
    (email, password, name)
    VALUES (?, ?, ?)`;
    return await pool(query, [email, password, name]);
}