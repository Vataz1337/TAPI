"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSchedule = void 0;
const faker_1 = require("@faker-js/faker");
const generateSchedule = (id) => {
    faker_1.faker.seed(id);
    const day = faker_1.faker.date.weekday();
    const subject = faker_1.faker.internet.domainWord();
    const room = faker_1.faker.location.streetAddress();
    const startTime = faker_1.faker.date.anytime();
    const endTime = faker_1.faker.date.anytime();
    return {
        id: id,
        day: day,
        subject: subject,
        room: room,
        startTime: startTime,
        endTime: endTime,
    };
};
exports.generateSchedule = generateSchedule;
