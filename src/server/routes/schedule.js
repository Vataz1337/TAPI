import express from "express";
import {generateSchedule} from "../dataGenerators/generateSchedule.js";

export const scheduleRouter = express.Router();

scheduleRouter.get('/:id', (req, res) => {
    const scheduleId = req.params.id;

    const fakeSchedule = generateSchedule(scheduleId);

    res.send(fakeSchedule);
})

