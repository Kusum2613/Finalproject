import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import { MongoClient, ServerApiVersion } from "mongodb";
import { User, Event, Availability } from './models/index.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '80mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


mongoose
  .connect("mongodb+srv://amanmug23cs:T2MeQhO7LuKe81v5@cluster0.q7qv0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

  // Register Route
  app.post("/api/auth/register", async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: "Email already in use" });
  
      // Create a new user
      const newUser = new User({
        username,
        email,
        password,
        userId: new mongoose.Types.ObjectId().toString(), 
      });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });


  // login
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Invalid credentials" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
      res.json({ message: "Login successful", user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  

  const PORT =  5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
