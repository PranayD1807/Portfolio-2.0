import { createOne, updateOne, getAll, getOne } from "./handlerFactory.js";
import PageView from "../models/pageviewModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

export const createPageView = createOne(PageView);
export const updatePageView = updateOne(PageView);
export const getAllPageViews = getAll(PageView);
export const getPageView = getOne(PageView);

export const getPageViewStats = catchAsync(async (req, res) => {
    try {
        const now = new Date();
        const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        const stats = {};

        // Lifetime stats
        const lifetimeData = await PageView.aggregate([
            {
                $group: {
                    _id: null,
                    totalViews: { $sum: 1 },
                    uniqueViews: { $addToSet: "$sessionId" },
                },
            },
        ]);

        stats.lifetime = {
            totalViews: lifetimeData[0]?.totalViews || 0,
            uniqueViews: lifetimeData[0]?.uniqueViews.length || 0,
        };

        // Last 24 hours stats
        const last24HoursData = await PageView.aggregate([
            {
                $match: {
                    createdAt: { $gte: last24Hours },
                },
            },
            {
                $group: {
                    _id: null,
                    totalViews: { $sum: 1 },
                    uniqueViews: { $addToSet: "$sessionId" },
                },
            },
        ]);

        stats.last24Hours = {
            totalViews: last24HoursData[0]?.totalViews || 0,
            uniqueViews: last24HoursData[0]?.uniqueViews.length || 0,
        };

        // Last week stats
        const lastWeekData = await PageView.aggregate([
            {
                $match: {
                    createdAt: { $gte: lastWeek },
                },
            },
            {
                $group: {
                    _id: null,
                    totalViews: { $sum: 1 },
                    uniqueViews: { $addToSet: "$sessionId" },
                },
            },
        ]);

        stats.lastWeek = {
            totalViews: lastWeekData[0]?.totalViews || 0,
            uniqueViews: lastWeekData[0]?.uniqueViews.length || 0,
        };

        res.status(200).json({ "status": "success", "data": stats });
    } catch (error) {
        console.error("Error fetching page view stats:", error);
        throw new AppError("Error fetching stats", 500)
    }
});
