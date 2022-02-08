import nodemailer from 'nodemailer';

const mailSender = async () => {
  const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: 'smtp.gmail.com',
    auth: {
      user: 'ramazzan.ittiev@gmail.com',
      pass: 'thisisgmail404',
    },
    secure: true,
  });

  const mailData = {
    from: 'ittiev@mail.ru', // sender address
    to: 'ramazzan.ittiev@gmail.com', // list of receivers
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: `<b>Hey there! </b>
    <br> This is our first message sent with Nodemailer<br/>`,
  };

  const info = await transporter.sendMail(mailData);

  console.log(nodemailer.getTestMessageUrl(info));
};

export default mailSender;
