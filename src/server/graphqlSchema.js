"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const generateStudent_1 = require("./dataGenerators/generateStudent");
const generateSchedule_1 = require("./dataGenerators/generateSchedule");
const DateType = new graphql_1.GraphQLScalarType({
    name: 'Date',
    serialize(value) {
        return value.toISOString();
    },
});
const StudentType = new graphql_1.GraphQLObjectType({
    name: 'Student',
    fields: {
        id: { type: graphql_1.GraphQLInt },
        name: { type: graphql_1.GraphQLString },
        surname: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
    },
});
const ScheduleType = new graphql_1.GraphQLObjectType({
    name: 'Schedule',
    fields: {
        id: { type: graphql_1.GraphQLInt },
        day: { type: graphql_1.GraphQLString },
        subject: { type: graphql_1.GraphQLString },
        room: { type: graphql_1.GraphQLString },
        startTime: { type: DateType },
        endTime: { type: DateType },
    },
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        student: {
            type: StudentType,
            args: { id: { type: graphql_1.GraphQLInt } },
            resolve(parent, args) {
                return (0, generateStudent_1.generateStudent)(args.id);
            },
        },
        students: {
            type: new graphql_1.GraphQLList(StudentType),
            resolve() {
                return [(0, generateStudent_1.generateStudent)(1), (0, generateStudent_1.generateStudent)(2)];
            },
        },
        schedule: {
            type: ScheduleType,
            args: { id: { type: graphql_1.GraphQLInt } },
            resolve(parent, args) {
                return (0, generateSchedule_1.generateSchedule)(args.id);
            },
        },
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
