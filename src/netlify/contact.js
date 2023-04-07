import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: "New Contact Form Submission",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: "Form submission successful!",
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: "Form submission failed. Please try again later.",
    };
  }
};

export { handler };
