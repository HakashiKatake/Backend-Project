//require('dotenv').config({path: './env'});

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './db/index.js';

dotenv.config({ path: './env' });   


connectDB();
















/*
import express from "express";
const app = express();


( async () => {
  try {
    await mongoose.connect('${process.env.MONGO_URI}/${DB_NAME}', {
    });
    console.log('Database connected');
    app.on('error', (err) => {
      console.error(err);
    });

    app.listen(process.env.PORT, () => {
      console.log('Server is running on port ${process.env.PORT}');
    }
    );

  } catch (error) {
    console.error(error);
  }
}
)();

*/