"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsRouter = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const generateStudent_1 = require("../dataGenerators/generateStudent");
exports.studentsRouter = express_1.default.Router();
/**
 * @swagger
 * /student/notFile/{id}:
 *   get:
 *     summary: Get student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Student ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student data
 */
exports.studentsRouter.get('/notFile/:id', (req, res) => {
    const studentId = req.params.id;
    const fakeStudent = (0, generateStudent_1.generateStudent)(studentId);
    res.send(fakeStudent);
});
/**
 * @swagger
 * /student/file/{id}:
 *   get:
 *     summary: Get a student from file by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Student ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student data from file
 */
exports.studentsRouter.get('/file/:id', (req, res) => {
    const filePath = path_1.default.join('./', 'generatedJson', 'students', 'studentData.json');
    const rawData = fs_1.default.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);
    const id = req.params.id;
    const student = data.find((student) => student.id === Number(id));
    res.send(student);
});
//new endpoints:
exports.studentsRouter.get('/all/file', (req, res) => {
    const filePath = path_1.default.join('./', 'generatedJson', 'students', 'studentData.json');
    const rawData = fs_1.default.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);
    res.send(data);
});
