import { createOne, updateOne, getAll, getOne } from "./handlerFactory.js";
import Experience from "../models/experienceModel.js";

export const createExperience = createOne(Experience);
export const updateExperience = updateOne(Experience);
export const getAllExperiences = getAll(Experience);
export const getExperience = getOne(Experience);