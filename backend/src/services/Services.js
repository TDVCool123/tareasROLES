const subjectByIdRepository = require("../repositories/subjectByIdRepository");
const subjectRepository = require("../repositories/subjectRepository");
const logger = require('../utils/logger');

const getSubjectByIdService = async (id) => {
  try {
    logger.info("getSubjectByIdService - Fetching users from the database"); 
    const subject = await subjectByIdRepository.getSubjectById(id);
    logger.info("getSubjectByIdService - Users fetched successfully!");
    return subject;
  } catch (error) {
    logger.error("getSubjectByIdService - Error fetching users: ", error); // Agregar log en caso de error
    throw error;
  }
};

const getSubjectService = async () => {
  try {
    logger.info("getSubjectService - Fetching users from the database"); 
    const subject = await subjectRepository.getSubject();
    logger.info("getSubjectService - Users fetched successfully!");
    return subject;
  } catch (error) {
    logger.error("getSubjectService - Error fetching users: ", error); // Agregar log en caso de error
    throw error;
  }
};

module.exports =  {getSubjectByIdService,getSubjectService};
