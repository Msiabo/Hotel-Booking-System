import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from 'cookie-parser'
import { connectDB } from "./db/connectDb.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebooks from "./hooks/ClerkWebhooks.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use(clerkMiddleware())

app.use("/api/clerk",clerkWebooks)

app.get('/',(req,res) => res.send("API is working"))

app.listen(port, () => {
    console.log("server is running on PORT:" + port);
    connectDB();
  });
