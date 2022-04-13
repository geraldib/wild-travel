import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import * as userService from '../services/userService.js';

export const getUsers = async (_, res) => {
  try {
    const users = await User.find().select('-password -__v').sort({ _id: -1 });
    res.status(200).send({
      data: {
        message: 'All Users',
        users,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send({
      data: {
        message: 'User Found',
        user,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email ? req.body.email : user.email;

    //password Update Logic
    if (req.body.oldPassword) {
      const result = await bcrypt.compare(req.body.oldPassword, user.password);
      if (result) {
        if (req.body.newPassword) {
          if (req.body.newPassword === req.body.repeatPassword) {
            user.password = bcrypt.hashSync(req.body.newPassword, 8);
          } else {
            return res
              .status(400)
              .send({ message: 'New Password does not match!' });
          }
        }
      } else {
        return res.status(400).send({ message: 'Old Password is incorrect!' });
      }
    }

    await user.save();

    res.status(200).send({
      data: {
        message: 'User Updated',
        user,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({
      data: {
        message: 'User Deleted',
        user,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};
