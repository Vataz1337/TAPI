import { faker } from '@faker-js/faker';

export const generateStudent = (id) => {
    faker.seed(Number(id));

    return {
        id: id,
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        email: faker.internet.email(),
    };
}


