const knex = require('knex');
const mysqlConnection = require('../config/knex_mysql');
const db = knex(mysqlConnection.development);

const getUser = async () =>{
    try{
        const users = await db('users').select('*');
        return users;
    } catch(e) {
        console.error(e);
    }
}
module.exports = getUser;