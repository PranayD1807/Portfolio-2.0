import { createOne, updateOne, deleteOne, getAll, getOne } from "./handlerFactory.js";
import Project from "../models/projectModel.js";

export const createProject = createOne(Project);
export const updateProject = updateOne(Project);
export const deleteProject = deleteOne(Project);
export const getAllProjects = getAll(Project);
export const getProject = getOne(Project);