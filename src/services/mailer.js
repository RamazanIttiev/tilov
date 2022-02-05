import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: 'smtp.gmail.com',
  auth: {
    user: 'ramazzan.ittiev@gmail.com',
    pass: 'thisisgmail404',
  },
  secure: true,
});

export const mailData = {
  from: 'ittiev@mail.ru', // sender address
  to: 'ramazzan.ittiev@gmail.com', // list of receivers
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: `<b>Hey there! </b>
    <br> This is our first message sent with Nodemailer<br/>`,
};

transporter.sendMail(mailData, (err, info) => {
  if (err) {
    return err;
  } else {
    return info;
  }
});
