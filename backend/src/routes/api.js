const express = require('express');
const router = express.Router();
const getSubjectByIdController = require('../controllers/subjectByIdController');
const getSubjectController = require('../controllers/subjectController');
const postSubject = require('../controllers/postSubjectController');  
const putSubject = require("../controllers/putSubjectController");
const deleteSubject = require("../controllers/deleteSubjectController");

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
router.post('/subject', checkAuth,  postSubject);
router.put('/subject', checkAuth,  putSubject);
router.delete('/subject', checkAuth,  deleteSubject );


module.exports = router;