import fs from "fs";
import path from "path";
import express from "express";
import {generateStudent} from "../dataGenerators/generateStudent.ts";
import {StudentInterface} from "../interfaces/studentInterface";

export const studentsRouter = express.Router();


studentsRouter.get<{id: number}, StudentInterface>('/notFile/:id', (req, res) => {
    const studentId = req.params.id;

    const fakeStudent = generateStudent(studentId);

    res.send(fakeStudent);
});

studentsRouter.get<{id: number}, StudentInterface>('/file/:id', (req, res) => {
    const filePath = path.join('..', 'generatedJson', 'students', 'studentData.json');

    const rawData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);

    const id = req.params.id;
    const student = data.find((student: { id: number; }) : boolean => student.id === id);

    if (student) {
        res.send(student);
    } else {
        res.status(404).json({ error: "Student not found" });
    }
});
