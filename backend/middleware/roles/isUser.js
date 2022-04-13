import { User } from '../../models/user.model.js';

export const isUser = async (req, res, next) => {
  const loggedUser = await User.findById(req.user.id);

  if (loggedUser.role !== 'user') {
    return res.status(401).send({
      data: {
        message: "You Don't have accesses on this route!",
      },
    });
  }
  next();
};
