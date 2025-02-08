const mongoose = require("mongoose");

const pinSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    businessName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    contactInfo: {
      phone: {
        type: String,
        default: null,
      },
      email: {
        type: String,
        default: null,
      },
      website: {
        type: String,
        default: null,
      },
    },
    image: {
      public_id: {
        type: String,
        default: null,
      },
      url: {
        type: String,
        default: null,
      },
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    amenities: {
      type: [String],
      default: [],
    },
    reviews: [
      {
        userId: {  // Changed from user._id to userId
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true
        },
        name: {  // Moved from user.name to top level
          type: String,
          required: true
        },
        image: {  // Moved from user.image to top level
          type: String,
          required: true
        },
        reviewText: {
          type: String,
          required: true,
        },
        ratings: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    operatingHours: {
      monday: { open: String, close: String },
      tuesday: { open: String, close: String },
      wednesday: { open: String, close: String },
      thursday: { open: String, close: String },
      friday: { open: String, close: String },
      saturday: { open: String, close: String },
      sunday: { open: String, close: String },
    },
    visitors: {
      type: [String], // Store user IDs as strings
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", pinSchema);
