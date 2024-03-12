

const express = require("express");
const { connection } = require("./DB/db");
const { AuthRoutes } = require("./Routers/Auth.Routes");
const cors = require('cors');
const { CourseRoutes } = require("./Routers/Course.Routes");
const app =  express();
app.use(cors())



app.use(express.json());

app.use("/users",AuthRoutes)
app.use("/couser",CourseRoutes)
app.get("/",(req,res)=>{
    res.send("get is working properly")
})


app.listen(8080,async()=>{
    try {
        console.log("port is running")
        await connection;
        console.log("server is connected")
    } catch (error) {
        console.log(error);
    }
})