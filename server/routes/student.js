import express from "express";

export const studentsRouter = express.Router();

studentsRouter.get('/', (req, res) => {
    res.send("Here will be students soon")
})

