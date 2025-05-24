import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/StayEazyDB`);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};