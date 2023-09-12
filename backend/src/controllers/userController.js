const getUserService = require('../services/userService');
const getUserController = (req, res)=>{
    //
    //call service
    const response = getUserService();
    return res.status(200).json(response);
};

module.exports = getUserController;