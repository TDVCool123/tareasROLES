const knex = require("knex");
const pgConnection = require("../config/knex-pg");
const logger = require("../utils/logger")
console.log(pgConnection);
const db = knex(pgConnection.development);

const editSubject = async (id,subject) => {
  try {
    const newSubject = await db("subjects").where("id", id).update(subject);
    logger.info("New Data: ", newSubject);
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports.editSubject = editSubject ;
