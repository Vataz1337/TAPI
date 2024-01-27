import express from "express";
import { generateSchedule } from "../dataGenerators/generateSchedule";
import { ScheduleInterface } from "../interfaces/scheduleInterface";
import path from "path";
import fs from "fs";

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
scheduleRouter.get<{ id: number }, ScheduleInterface>('/notFile/:id', (req, res) => {
    const scheduleId = req.params.id;

    const fakeSchedule = generateSchedule(scheduleId);

    res.send(fakeSchedule);
});

/**
 * @swagger
 * /schedule/file/{id}:
 *   get:
 *     summary: Get a schedule from file by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Schedule ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Schedule data from file
 */
scheduleRouter.get<{ id: number }, ScheduleInterface>('/file/:id', (req, res) => {
    const filePath = path.join('./', 'generatedJson', 'students', 'scheduleData.json');

    const rawData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);

    const id = req.params.id;

    const schedule = data.find((schedule: { id: number; }) : boolean => schedule.id === Number(id));

    res.send(schedule);
});
