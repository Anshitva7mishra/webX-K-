import mongoose from "mongoose";
import validator from "validator";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      validate: [validator.isEmail, "Invalid email address"],
    },
    message: {
      type: String,
      required: true,
      maxlength: 500,
    },
    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Contact", contactSchema);
