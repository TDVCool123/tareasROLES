const knex = require("knex");
const pgConnection = require("../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);
const logger = require("../utils/logger");


const deleteSubjectById = async (id) => {
  try {
    const subject = await db("subjects").where("id", id).del();
    logger.info("Deleting data");
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports.deleteSubjectById = deleteSubjectById ;
