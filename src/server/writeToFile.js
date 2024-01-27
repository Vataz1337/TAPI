"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const generateStudent_1 = require("./dataGenerators/generateStudent");
const numberOfStudents = 10;
const students = [];
for (let i = 1; i <= numberOfStudents; i++) {
    students.push((0, generateStudent_1.generateStudent)(i));
}
const data = JSON.stringify(students, null, 2);
const directoryPath = "generatedJson/students";
const filePath = path_1.default.join(directoryPath, "studentData.json");
if (!fs_1.default.existsSync(directoryPath)) {
    fs_1.default.mkdirSync(directoryPath, { recursive: true });
}
fs_1.default.writeFileSync(filePath, data);
console.log(`Generated and saved data for ${numberOfStudents} students to ${filePath}`);
