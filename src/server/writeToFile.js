import fs from "fs";
import path from "path";
import { generateStudent } from "./dataGenerators/generateStudent.js";

const numberOfStudents = 10;
const students = [];

for (let i = 1; i <= numberOfStudents; i++) {
    students.push(generateStudent(i));
}

const data = JSON.stringify(students, null, 2);


const directoryPath = "generatedJson/students";
const filePath = path.join(directoryPath, "studentData.json");

if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
}

fs.writeFileSync(filePath, data);

console.log(`Generated and saved data for ${numberOfStudents} students to ${filePath}`);
