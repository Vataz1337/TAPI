import express from "express";
import {createServer} from "node:http";

import {studentsRouter} from "./routes/student.js";
import {scheduleRouter} from "./routes/schedule.js";

const PORT = 8080;
const app = express();
const server = createServer(app)

app.use('/student', studentsRouter)
app.use('/schedule', scheduleRouter)

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})