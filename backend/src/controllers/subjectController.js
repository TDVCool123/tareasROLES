const getSubjectService = require('../services/Services');
const logger = require('../utils/logger');
const getSubjectByIdController = async (req, res) => {
    
    const { id } = req.query;

    logger.info('getSubjectByIdController - Req', req);
    try {
        const users = await getSubjectService.getSubjectService();
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

module.exports = getSubjectByIdController;