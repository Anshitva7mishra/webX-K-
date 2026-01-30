import Contact from "../models/Contact.model.js";
import asyncHandler from "../middlewares/async.middleware.js";
import { MESSAGES } from "../constants/messages.js";

export const submitContactForm = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: MESSAGES.ALL_FIELDS_REQUIRED,
    });
  }

  await Contact.create({
    name,
    email,
    message,
    ipAddress: req.ip,
  });

  res.status(201).json({
    success: true,
    message: MESSAGES.CONTACT_SUCCESS,
  });
});
