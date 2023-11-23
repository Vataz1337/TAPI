import { faker } from '@faker-js/faker';
import {StudentInterface} from "../interfaces/studentInterface";


export const generateStudent = (id: number) : StudentInterface => {
    faker.seed(Number(id));

    return {
        id: id,
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        email: faker.internet.email(),
    };
}


