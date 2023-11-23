import { faker } from '@faker-js/faker';

export const generateSchedule = (id) => {
    faker.seed(Number(id));

    const day = faker.date.weekday();
    const subject = faker.internet.domainWord()
    const room = faker.location.streetAddress()
    const startTime = faker.date.anytime()
    const endTime = faker.date.anytime()

    return {
        id: id,
        day: day,
        subject: subject,
        room: room,
        startTime: startTime,
        endTime: endTime,
    };
};


