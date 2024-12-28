import mongoose from "mongoose";

const pageViewSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: true,
        index: true,
    },
    ipAddress: {
        type: String,
        required: true,
    },
    deviceInfo: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const PageView = mongoose.model('PageView', pageViewSchema);
export default PageView;
