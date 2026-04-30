import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

export const sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `
    });

    res.status(200).json({
      success: true,
      message: "Message sent and saved"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};