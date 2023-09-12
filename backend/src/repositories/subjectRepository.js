const knex = require("knex");
const pgConnection = require("../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const getSubject = async () => {
  try {
    const subject = await db("subjects").select("*");
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

module.exports.getSubject = getSubject ;
