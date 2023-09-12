const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/subjectByIdController');
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
router.get('/subject', checkAuth,  getUserController);

module.exports = router;