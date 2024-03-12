const express = require("express");
const { AuthMiddleware } = require("../Middleware/Auth.Middleware");
const { CourseModel } = require("../Models/Course.model");
const CourseRoutes = express.Router();

CourseRoutes.post('/addCourse',AuthMiddleware,async (req,res)=>{
    try {
        const { userID, courses } = req.body;
        console.log(req.body);
        const newCourse = new CourseModel({
            userID: userID,
            Course: courses
        });

        await newCourse.save();

        return res.status(201).json({ message: 'Courses added successfully' , newCourse });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


CourseRoutes.get('/', AuthMiddleware, async (req, res) => {
    try {
        const {userID} = req.body;
        const userCourses = await CourseModel.findOne({ userID: userID });

        return res.json({ courses: userCourses.Course});
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


   
module.exports = {CourseRoutes};
