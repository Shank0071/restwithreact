require("dotenv").config()

const express = require("express");

const workoutRoutes = require("./routes/workoutRoutes");


// init express app
app = express();


// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path);
    console.log(req.method);
    next();
})


app.use("/api/workouts", workoutRoutes);


app.listen(process.env.PORT, () => {
    console.log("Listening to port 3000");
})