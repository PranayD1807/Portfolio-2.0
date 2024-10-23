import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    info: {
        type: [String],
        required: true,
    },
    isOngoing: {
        type: Boolean,
        required: true,
        default: false,
    },
    endsAt: {
        type: Date,
        required: false,
    },
}, {
    timestamps: true,
});

const Experience = mongoose.model("Experience", experienceSchema);
export default Experience;
