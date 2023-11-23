import express from "express";
import {generateSchedule} from "../dataGenerators/generateSchedule.ts";
import {ScheduleInterface} from "../interfaces/scheduleInterface";

export const scheduleRouter = express.Router();


scheduleRouter.get<{id: string}, ScheduleInterface>('/:id', (req, res) => {
    const scheduleId = req.params.id;

    const fakeSchedule = generateSchedule(scheduleId);

    res.send(fakeSchedule);
})

