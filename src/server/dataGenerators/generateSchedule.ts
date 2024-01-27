import { faker } from '@faker-js/faker';
import {ScheduleInterface} from "../interfaces/scheduleInterface";

export const generateSchedule = (id: number): ScheduleInterface => {
    faker.seed(id);

    const day: string = faker.date.weekday();
    const subject: string = faker.internet.domainWord();
    const room: string = faker.location.streetAddress();
    const startTime: Date = faker.date.anytime();
    const endTime: Date = faker.date.anytime();

    return {
        id: id,
        day: day,
        subject: subject,
        room: room,
        startTime: startTime,
        endTime: endTime,
    };
};


