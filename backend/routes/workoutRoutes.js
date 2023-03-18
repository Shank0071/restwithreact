const express = require("express");


const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "Get request received"});
})

router.get("/:id", (req, res) => {
    res.json({message: "Get single request"});
})

router.post("/:id", (req, res) => {
    res.json({message: "Posted new workout"});
})

router.delete("/:id", (req, res) => {
    res.json({message: "Workout deleted"});
})

router.patch("/:id", (req, res) => {
    res.json({message: "Workout updated"})
})

module.exports = router;