const service = require('../services/Services');
const logger = require('../utils/logger');
const putSubjectController = async (req, res) => {
    
    const subject = req.body;
    const { id } = req.query;

    logger.info('putSubjectController - Req', req);
    try {
        const users = await service.putSubjectByIdService(id, subject);
        return res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving users',
            error: error.message
        })
    }
    
};

module.exports = putSubjectController;