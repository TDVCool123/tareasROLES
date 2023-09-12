const knex = require("knex");
const pgConnection = require("../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const getSubjectById = async (id) => {
  try {
    const subject = await db("subjects").where("id", id);
    const usersJson = subject.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    return usersJson;
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports.getSubjectById = getSubjectById ;
