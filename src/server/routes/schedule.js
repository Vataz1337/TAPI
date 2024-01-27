"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleRouter = void 0;
const express_1 = __importDefault(require("express"));
const generateSchedule_1 = require("../dataGenerators/generateSchedule");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.scheduleRouter = express_1.default.Router();
/**
 * @swagger
 * /schedule/notFile/{id}:
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
exports.scheduleRouter.get('/notFile/:id', (req, res) => {
    const scheduleId = req.params.id;
    const fakeSchedule = (0, generateSchedule_1.generateSchedule)(scheduleId);
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
exports.scheduleRouter.get('/file/:id', (req, res) => {
    const filePath = path_1.default.join('./', 'generatedJson', 'students', 'scheduleData.json');
    const rawData = fs_1.default.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);
    const id = req.params.id;
    const schedule = data.find((schedule) => schedule.id === Number(id));
    res.send(schedule);
});
