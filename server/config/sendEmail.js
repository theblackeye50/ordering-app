import { Resend } from 'resend';
import dotenv from 'dotenv'
import nodemailer from 'nodemailer';
dotenv.config()

if(!process.env.RESEND_API){
    console.log("Provide RESEND_API in side the .env file")
}

// const resend = new Resend(process.env.RESEND_API);

// const sendEmail = async ({ sendTo, subject, html }) => {
//     try {
//       const { data, error } = await resend.emails.send({
//         from: 'Aurabay <noreply@dfdfljddffd.com>',
//         to: sendTo,
//         subject: subject,
//         html: html,
//       });
  
//       if (error) {
//         console.error("Error sending email:", error);
//         return error; // Return the error for handling in the calling function
//       }
  
//       return data;
//     } catch (error) {
//       console.error("Error in sendEmail:", error);
//       return error; // Return the error for handling in the calling function
//     }
//   };

// export default sendEmail


const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "Rahirajrahul@gmail.com",
    pass: "kqviouydpsafrxjt",
  },
});

export const NodeMailer = async (to, subject, msg) => {
  try {
    await transporter.sendMail({
      to,
      subject,
      html: msg,
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};

