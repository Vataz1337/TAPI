import { faker } from '@faker-js/faker';

export const generateSchedule = (id) => {
    faker.seed(Number(id));

    const day = faker.date.weekday(); // Generate a random weekday
    const subject = faker.random.words(); // Generate random subject or topic
    const room = faker.address.streetName(); // Generate a random room name
    const startTime = faker.time.recent(); // Generate a random start time
    const endTime = faker.time.recent(); // Generate a random end time

    return {
        id: id,
        day: day,
        subject: subject,
        room: room,
        startTime: startTime,
        endTime: endTime,
    };
};


