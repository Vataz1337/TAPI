import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLScalarType,
} from 'graphql';
import {generateStudent} from "./dataGenerators/generateStudent";
import { generateSchedule } from "./dataGenerators/generateSchedule";

const DateType = new GraphQLScalarType({
    name: 'Date',
    serialize(value) {
        return value.toISOString();
    },
});

const StudentType = new GraphQLObjectType({
    name: 'Student',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        surname: { type: GraphQLString },
        email: { type: GraphQLString },
    },
});

const ScheduleType = new GraphQLObjectType({
    name: 'Schedule',
    fields: {
        id: { type: GraphQLInt },
        day: { type: GraphQLString },
        subject: { type: GraphQLString },
        room: { type: GraphQLString },
        startTime: { type: DateType },
        endTime: { type: DateType },
    },
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        student: {
            type: StudentType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return generateStudent(args.id);
            },
        },
        students: {
            type: new GraphQLList(StudentType),
            resolve() {
                return [generateStudent(1), generateStudent(2)];
            },
        },
        schedule: {
            type: ScheduleType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return generateSchedule(args.id);
            },
        },
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
});
