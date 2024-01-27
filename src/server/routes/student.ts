import fs from "fs";
import path from "path";
import express from "express";
import {generateStudent} from "../dataGenerators/generateStudent";
import {StudentInterface} from "../interfaces/studentInterface";

export const studentsRouter = express.Router();

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
studentsRouter.get<{id: number}, StudentInterface>('/notFile/:id', (req, res) => {
    const studentId = req.params.id;

    const fakeStudent = generateStudent(studentId);

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
studentsRouter.get<{id: number}, StudentInterface>('/file/:id', (req, res) => {
    const filePath = path.join('./', 'generatedJson', 'students', 'studentData.json');

    const rawData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);

    const id = req.params.id;

    const student = data.find((student: { id: number; }) : boolean => student.id === Number(id));

    res.send(student);
});