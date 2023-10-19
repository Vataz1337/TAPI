import express from "express";

export const scheduleRouter = express.Router();

scheduleRouter.get('/', (req, res) => {
    res.send("Here schedule soon")
})

