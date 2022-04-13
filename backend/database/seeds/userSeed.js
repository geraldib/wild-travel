import { User } from '../../models/user.model.js';
import bcrypt from 'bcryptjs';

export const createAdmin = async () => {
  const admin = {
    name: 'Admin',
    surname: 'Admin',
    phone: '0697290241',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('crispybacon2020', 8),
    role: 'admin',
  };

  let adminExist = await User.findOne({ email: admin.email });
  if (!adminExist) {
    User.create(admin, function (e) {
      if (e) {
        throw e;
      }
    });
  }
};
