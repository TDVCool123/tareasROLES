const getUser = require("../repositories/userRepository");

const getUserService=()=>{
    //TODO Conextarme al repositoryo

    /*return{
        name: 'Paul',
        lastName: 'Landaeta',
        code:'26253'
    }*/
    const users = getUser();
    return users;
}
 
module.exports = getUserService;