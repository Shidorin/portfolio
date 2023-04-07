// import { Handler, HandlerEvent } from "@netlify/functions";
// import nodemailer from "nodemailer";

// const handler: Handler = async (event: HandlerEvent) => {
//   const { name, email, message } = JSON.parse(event.body);

//   const transporter = nodemailer.createTransport({
//     host: "smtp.example.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "your-email@example.com",
//       pass: "your-email-password",
//     },
//   });

//   const mailOptions = {
//     from: "your-email@example.com",
//     to: "recipient-email@example.com",
//     subject: `New message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: "Email sent successfully!" }),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ message: "Failed to send email." }),
//     };
//   }
// };
export const obj = {};
// export { handler };
