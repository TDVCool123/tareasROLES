const subjectByIdRepository = require("../repositories/subjectByIdRepository");
const subjectRepository = require("../repositories/subjectRepository");
const postRepository = require("../repositories/postSubjectRepository");
const putSubjectByIdRepository = require("../repositories/putSubjectByIdRepository")
const deleteSubjectByIdRepository= require("../repositories/deleteSubjectByIdRepository")

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

const postSubjectService = async (body) => {
  try {
    logger.info("getSubjectService - Adding data to the database"); 
    const subject = await postRepository.createSubject(body);
    logger.info("getSubjectService - Data added successfully!");
    return subject;
  } catch (error) {
    logger.error("getSubjectService - Error adding data: ", error); // Agregar log en caso de error
    throw error;
  }
};

const putSubjectByIdService = async (id, subject) => {
  try {
    logger.info(`putSubjectByIdService - Changing subject: ${id} from the database`); 
    const newSubject = await putSubjectByIdRepository.editSubject(id, subject);
    logger.info(`putSubjectByIdService - Subject ${id} changed successfully!`);
    return newSubject;
  } catch (error) {
    logger.error("putSubjectByIdService - Error fetching users: ", error); // Agregar log en caso de error
    throw error;
  }
};

const deleteSubjectByIdService = async (id) => {
  try {
    logger.info("deleteSubjectByIdService - Fetching users from the database"); 
    const subject = await deleteSubjectByIdRepository.deleteSubjectById(id);
    logger.info("deleteSubjectByIdService - Users fetched successfully!");
    return subject;
  } catch (error) {
    logger.error("deleteSubjectByIdService - Error fetching users: ", error); // Agregar log en caso de error
    throw error;
  }
};

module.exports =  {getSubjectByIdService,getSubjectService, postSubjectService, putSubjectByIdService, deleteSubjectByIdService};
