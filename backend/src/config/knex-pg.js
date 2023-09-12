//require("dotenv").config();
const pgConfig = {
  development: {
    client: "pg",
    connection: {
      //TODO: jalar desde local ENV
      host: "dpg-cjvmjinhdsdc738j9cd0-a.oregon-postgres.render.com",
      user: "pary",
      password: "AAOzEkSUncFlAn2VfcVWVKQ0SIsXCvtR",
      database: "ssubject",
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: '../db/migrations'
    },
  },
  
};

module.exports = pgConfig;
/*module.exports = {
  connection: pgConfig
};*/