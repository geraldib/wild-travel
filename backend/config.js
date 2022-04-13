import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import formData from 'express-form-data';

export const config = (app) => {
  app.use(cors());

  dotenv.config();
  const port = process.env.PORT || 5001;
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(formData.parse());
  app.use(morgan('dev'));

  mongoose
    .connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is listening at http://127.0.0.1:${port}/`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
