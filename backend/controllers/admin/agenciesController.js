import { User } from '../../models/user.model.js';
import bcrypt from 'bcryptjs';
import {updateFields} from "../../services/agencyService.js";

export const getAgencies = async (req, res) => {
  const options = {
    page: req.query.page || 1,
    limit: req.query.limit || 10,
    select: "-password -__v",
    collation: {
      locale: 'en',
    },
  };

  try {
    const agencies = await User.paginate({
      role: "agency",
    }, options);
    res.status(200).send({
      data: {
        message: 'All Agencies',
        agencies,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};

export const getAgency = async (req, res) => {
  try {
    const agency = await User.findById(req.params.id);
    res.status(200).send({
      data: {
        message: 'Agency Found',
        agency,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};

export const updateAgency = async (req, res) => {
  try {
    const agency = await User.findById(req.params.id);
    updateFields(agency, req);

    //password Update Logic
    if (req.body.oldPassword) {
      const result = await bcrypt.compare(req.body.oldPassword, agency.password);
      if (result) {
        if (req.body.newPassword) {
          if (req.body.newPassword === req.body.repeatPassword) {
            agency.password = bcrypt.hashSync(req.body.newPassword, 8);
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

    await agency.save();

    res.status(200).send({
      data: {
        message: 'Agency Updated',
        agency,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};

export const deleteAgency = async (req, res) => {
  try {
    const agency = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({
      data: {
        message: 'Agency Deleted',
        agency,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};
