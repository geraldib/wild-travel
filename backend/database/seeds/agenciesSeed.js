import { User } from '../../models/user.model.js';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

export const createAgencies = async () => {

    let agencies = await User.find({ role: "agency" });

    for (let i=0; i<=20; i++){
        const agency = {
            name: faker.name.firstName(),
            surname: faker.name.lastName(),
            phone: faker.phone.phoneNumber('+355 ## ## ## ###'),
            email: faker.internet.email(),
            password: bcrypt.hashSync('crispybacon2020', 8),
            role: 'agency',
        };

        if(agencies.length <= 20) {
            User.create(agency, function (e) {
                if (e) {
                    throw e;
                }
            });
        }
    }
};
