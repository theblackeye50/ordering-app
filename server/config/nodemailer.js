// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    secure:true,
    host: "smtp.gmail.com",
    port: 465,
    // secure: false, // true for port 465, false for other ports
    auth: {
      user: "Rahirajrahul@gmail.com",
      pass: "kqvi ouyd psaf rxjt ",
    },
  });


  function sendMail(to, subject, msg) {
    transporter.sendMail({
      to: to,
      subject: subject,
      html: msg
    });

    console.log("email sent");
  }

  sendMail("Rahulchaudharyrehan@gmail.com", " this is subject", " this is verification email");