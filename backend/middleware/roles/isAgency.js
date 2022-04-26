import { User } from '../../models/user.model.js';

export const isAgency = async (req, res, next) => {
  const loggedUser = await User.findById(req.user.id);

  if (loggedUser.role !== 'agency') {
    return res.status(401).send({
      data: {
        message: "You Don't have accesses on this route!",
      },
    });
  }
  next();
};
