import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './Routes/bookRoute.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/books', bookRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' Connected to MongoDB');
    app.listen(5000, () => {
      console.log(' Server is running on port 5000');
    });
  })
  .catch(err => console.error(err));
