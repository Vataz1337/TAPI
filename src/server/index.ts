import express from "express";
import {expressMiddleware} from "@apollo/server/express4";
import {ApolloServer} from "@apollo/server";
import cors from "cors";
import {studentsRouter} from "./routes/student.ts";
import {scheduleRouter} from "./routes/schedule.ts";

const PORT = 8080;
const app = express();

// const typeDefs = `#graphql
// type Student {
//     id: Int
//     name: String
//     surname: String
//     email: String
// }
// `;

// const Resolvers = {
//     Query: {
//         students: () => students,
//         student: (parent, args) => students.find(s => s.id === args.id),
//     }
// }

// const server = new ApolloServer({typeDefs, Resolvers});
// await server.start();

app.use('/student', studentsRouter)
app.use('/schedule', scheduleRouter)
// app.use('/graphql', cors(), express.json(), expressMiddleware(server))
app.use(cors({
    origin: "*"
}))

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})