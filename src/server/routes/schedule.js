"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleRouter = void 0;
const express_1 = __importDefault(require("express"));
const generateSchedule_1 = require("../dataGenerators/generateSchedule");
exports.scheduleRouter = express_1.default.Router();
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
exports.scheduleRouter.get('/:id', (req, res) => {
    const scheduleId = req.params.id;
    const fakeSchedule = (0, generateSchedule_1.generateSchedule)(scheduleId);
    res.send(fakeSchedule);
});
