import catchAsync from "./../utils/catchAsync.js";
import AppError from "./../utils/appError.js";
import APIFeatures from "./../utils/apiFeatures.js";

export function deleteOne(Model) {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            return next(new AppError("No document found with that ID", 404));
        }

        res.status(204).json({
            status: "success",
            data: null,
        });
    });
}

export function updateOne(Model) {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!doc) {
            return next(new AppError("No document found with that ID", 404));
        }

        res.status(200).json({
            status: "success",
            data: doc,
        });
    });
}

export function updateOneByField(Model, fieldName, shouldCreateNew) {
    return catchAsync(async (req, res, next) => {
        const filter = { [fieldName]: req.params.id };
        const update = req.body;
        const options = { new: true, runValidators: true, upsert: shouldCreateNew };

        const doc = await Model.findOneAndUpdate(filter, update, options);

        if (!doc) {
            return next(new AppError(`No document found with that ${fieldName}`, 404));
        }

        res.status(200).json({
            status: "success",
            data: doc,
        });
    });
}

export function createOne(Model) {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body);

        res.status(201).json({
            status: "success",
            data: doc,
        });
    });
}

export function getOne(Model, popOptions) {
    return catchAsync(async (req, res, next) => {
        let query = Model.findById(req.params.id);
        if (popOptions) query = query.populate(popOptions);
        const doc = await query;

        if (!doc) {
            return next(new AppError("No document found with that ID", 404));
        }

        res.status(200).json({
            status: "success",
            data: doc,
        });
    });
}

export function getAll(Model) {
    return catchAsync(async (req, res, next) => {
        const features = new APIFeatures(Model.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        const doc = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: "success",
            results: doc.length,
            data: doc,
        });
    });
}