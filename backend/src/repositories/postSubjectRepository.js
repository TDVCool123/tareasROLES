const knex = require("knex");
const pgConnection = require("../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const createSubject = async (subjectObject) => {
  try {
    const subject = await db("subjects").insert(subjectObject).select("*");
   /* const subjectJson = subject.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    return subjectJson;*/
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports.createSubject = createSubject ;
