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
      .send('Missing required fields: from, subject, message.');
  }

  const receivedMailOptions = {
    from: process.env.GMAIL_USER_NAME,
    to: process.env.GMAIL_USER_NAME,
    subject,
    html: `<p>${message}</p>`
  };

  const autoReplyMailOptions = {
    from: process.env.GMAIL_USER_NAME,
    to: from,
    subject: 'Auto Reply: Email sent successfully!',
    html: '<p>Thank you for contacting me. I will get back to you as soon as possible.</p>'
  };

  transporter.sendMail(receivedMailOptions, (error) => {
    if (error) {
      return res.status(500).send('Failed to send email. Please try again.');
    }

    transporter.sendMail(autoReplyMailOptions, (error) => {
      if (error) {
        return res.status(500).send('Failed to send email. Please try again.');
      }

      res.send('Email sent successfully!');
    });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
