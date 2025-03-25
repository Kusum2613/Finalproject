import mongoose from "mongoose";

// Availability Schema
const AvailabilitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  day: { type: String, required: true },
  timeSlots: [{ start: String, end: String }],
  createdAt: { type: Date, default: Date.now }
});

export const Availability = mongoose.model("Availability", AvailabilitySchema);