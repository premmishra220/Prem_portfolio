import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  const { name, email, message } = req.body;
  const file = req.file;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const attachment = file
    ? [
        {
          filename: file.originalname,
          content: file.buffer,
        },
      ]
    : [];

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      attachments: attachment,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email send error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to send email with attachment.",
    });
  }
};