import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
import connectToMongoDB from "./db/connectToMongoDB.js"

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json()); // to parse incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});