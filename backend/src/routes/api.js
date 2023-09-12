const express = require('express');
const router = express.Router();
const getSubjectByIdController = require('../controllers/subjectByIdController');
const getSubjectController = require('../controllers/subjectController');
const { checkAuth } = require('../middleware/auth');

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtener una lista de usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */
router.get('/subject/id', checkAuth,  getSubjectByIdController);
router.get('/subject', checkAuth,  getSubjectController);


module.exports = router;