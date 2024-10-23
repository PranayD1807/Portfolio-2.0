import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    num: {
        type: String,
        required: true,
    },
    tagLine: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    stack: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    live: {
        type: String,
        required: false,
    },
    github: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
