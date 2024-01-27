"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_1 = require("./routes/student");
const schedule_1 = require("./routes/schedule");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./swagger"));
const express_graphql_1 = require("express-graphql");
const graphqlSchema_1 = require("./graphqlSchema");
const PORT = 8080;
const app = (0, express_1.default)();
app.use('/student', student_1.studentsRouter);
app.use('/schedule', schedule_1.scheduleRouter);
app.use((0, cors_1.default)());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: graphqlSchema_1.schema,
    graphiql: true,
}));
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
