import { faker } from '@faker-js/faker';

export const generateSchedule = (id) => {
    faker.seed(Number(id));

    const day = faker.date.weekday();
    const subject = faker.random.words();
    const room = faker.address.streetName();
    const startTime = faker.time.recent();
    const endTime = faker.time.recent();

    return {
        id: id,
        day: day,
        subject: subject,
        room: room,
        startTime: startTime,
        endTime: endTime,
    };
};


