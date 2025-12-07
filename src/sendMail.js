import nodemailer from 'nodemailer';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Настройка SMTP — здесь можно безопасно использовать ваши данные,
// потому что этот код запускается на сервере, а не в браузере.
const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 587,
  secure: false,
  auth: {
    user: "androidstudio@mdktest.ru",   // androidstudio@mdktest.ru
    pass: "piwrrlvaoxgfhexx"   // piwrrlvaoxgfhexx
  }
});

app.post('/send', async (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Сайт" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Новое сообщение: ${subject}`,
      text: `
Имя: ${name}
Телефон: ${phone}
Email: ${email}

Сообщение:
${message}
      `
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
