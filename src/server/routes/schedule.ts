import express from "express";
import { generateSchedule } from "../dataGenerators/generateSchedule";
import { ScheduleInterface } from "../interfaces/scheduleInterface";

export const scheduleRouter = express.Router();

/**
 * @swagger
 * /schedule/{id}:
 *   get:
 *     summary: Get schedule by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Schedule ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Schedule data
 */
scheduleRouter.get<{ id: number }, ScheduleInterface>('/:id', (req, res) => {
    const scheduleId = req.params.id;

    const fakeSchedule = generateSchedule(scheduleId);

    res.send(fakeSchedule);
});
