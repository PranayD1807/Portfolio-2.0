import { createOne, updateOne, getAll, getOne } from "./handlerFactory.js";
import PageView from "../models/pageviewModel.js";

export const createPageView = createOne(PageView);
export const updatePageView = updateOne(PageView);
export const getAllPageViews = getAll(PageView);
export const getPageView = getOne(PageView);


