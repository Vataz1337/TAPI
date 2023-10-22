import express from "express";
import { generateStudent } from "../dataGenerators/generateStudent.js";

export const studentsRouter = express.Router();

studentsRouter.get('/:id', (req, res) => {
    const studentId = req.params.id;

    const fakeStudent = generateStudent(studentId);

    res.send(fakeStudent);
});
