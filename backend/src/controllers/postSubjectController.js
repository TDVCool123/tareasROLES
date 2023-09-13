const service = require('../services/Services');
const logger = require('../utils/logger');
const getSubjectByIdController = async (req, res) => {
    
    const { body } = req;

    logger.info('getSubjectByIdController - Req', req);
    try {
        const subject = await service.postSubjectService(body);
        return res.status(200).json({
            success: true,
            message: 'subject retrieved successfully',
            data: subject
        }); 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }
    
};

module.exports = getSubjectByIdController;