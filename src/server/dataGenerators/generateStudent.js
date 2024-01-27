"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStudent = void 0;
const faker_1 = require("@faker-js/faker");
const generateStudent = (id) => {
    faker_1.faker.seed(Number(id));
    return {
        id: id,
        name: faker_1.faker.person.firstName(),
        surname: faker_1.faker.person.lastName(),
        email: faker_1.faker.internet.email(),
    };
};
exports.generateStudent = generateStudent;
