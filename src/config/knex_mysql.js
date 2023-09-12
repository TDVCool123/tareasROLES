const mysqlConfig = {
    development:{
        client:'mysql',
        connection: {
            //jalar desde local ENV
            host: 'localhost',
            user:'root',
            password: 'root',
            database: 'auxiliatron'
        }
    }
}

module.exports = mysqlConfig;