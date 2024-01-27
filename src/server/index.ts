import express from "express";
import cors from "cors";
import { studentsRouter } from "./routes/student";
import { scheduleRouter } from "./routes/schedule";
import swaggerUi from 'swagger-ui-express';
import specs from './swagger';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphqlSchema';

const PORT = 8080;
const app = express();

app.use('/student', studentsRouter);
app.use('/schedule', scheduleRouter);

app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
