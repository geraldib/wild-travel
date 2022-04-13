import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token || token === null)
    return res.status(401).send({
      data: {
        auth: false,
        message: "You Don't have accesses on this route!",
      },
    });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err)
      return res.status(500).send({
        data: {
          auth: false,
          message: 'Credentials are wrong!',
        },
      });

    req.user = decoded;
    next();
  });
};
