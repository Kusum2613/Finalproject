import mongoose from "mongoose";

// Event Schema
const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dateTime: { type: Date, required: true },
  eventLink: { type: String },
  bannerImage: { type: String },
  backgroundColor: { type: String, default: "#ffffff" },
  password: { type: String },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  status: { type: String, enum: ["upcoming", "pending", "canceled"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export const Event = mongoose.model("Event", EventSchema);