import mongoose from "mongoose";
import { DatabaseConnectionError } from "../errors/database.js";
import keys from "../config/keys.js";

const connectionConfig = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export const connectWithDatabase = async () => {
  try {
    await mongoose.connect(keys.mongoURI, connectionConfig);
    console.log("Connected with Mongo database".blue);
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
