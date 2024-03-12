const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    userID : String,
    Course: {
        type: [String], 
        default: []
    }
});

const CourseModel = mongoose.model("Course", CourseSchema);

module.exports = { CourseModel };
