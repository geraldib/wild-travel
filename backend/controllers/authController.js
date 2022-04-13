import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { genToken } from '../middleware/auth/genToken.js';

export const register = async (req, res) => {
  const user = new User(req.body);

  const passReg = new RegExp('^((?=.*[a-z])(?=.*[0-9])(?=.{6,}))');
  const emailReg = new RegExp(
    '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
  );

  user.password = bcrypt.hashSync(req.body.password, 8);
  user.role = 'user';

  try {
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      return res
        .status(409)
        .send({ message: 'This user is alredy registered' });
    } else {
      if (!emailReg.test(req.body.email)) {
        return res.status(400).send({
          message: 'Email is incorrect',
        });
      }

      if (!passReg.test(req.body.password)) {
        return res.status(400).send({
          message: 'Password must contain at least 6 caracters and 1 number',
        });
      }

      await user.save();

      const token = await genToken({ id: user._id });

      const userData = {
        id: user._id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        phone: user.phone,
        role: user.role
      };

      return res.status(201).send({
        data: {
          message: 'user created',
          token,
          user: userData,
        },
      });
    }
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(400).send({ message: 'Email does not exist!' });
    }

    const result = await bcrypt.compare(req.body.password, user.password);

    if (result) {
      const token = await genToken({ id: user._id });

      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
      };

      return res.status(200).send({ token, user: userData });
    } else {
      return res.status(400).send({ message: 'Password is incorrect!' });
    }
  } catch (error) {
    return res.status(400).send({ message: 'Something went wrong!' });
  }
};
