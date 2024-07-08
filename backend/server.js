const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3030;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER_NAME,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

app.post('/api/send-mail', (req, res) => {
  const { from, subject, message } = req.body;

  if (!from || !subject || !message) {
    return res
      .status(400)
      .send('Missing required Fields: from, subject,message');
  }

  // Handle sending email to ourselves
  const receivedMailOptions = {
    from,
    to: process.env.GMAIL_USER_NAME,
    subject,
    html: `<p>${message}</p>`
  };

  // Handling auto-reply
  const autoReplyMailOptions = {
    from: process.env.GMAIL_USER_NAME,
    to: from,
    subject: 'John Doe: Thank you contacting me!',
    html: `<p>Thank you contacting me! I will get back to you as soon as possible.</p>`
  };

  transporter.sendMail(receivedMailOptions, (error) => {
    if (error) {
      return res.status(500).send('Failed to send email! Please try again.');
    }

    transporter.sendMail(autoReplyMailOptions, (error) => {
      if (error) {
        return res
          .status(500)
          .send('Failed to send auto email! Please try again.');
      }

      res.status(200).send('Email sent!');
    });
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
