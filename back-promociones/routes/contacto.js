const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config(); // Importante

router.post("/", async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"${nombre}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "Nuevo mensaje de contacto",
      text: mensaje,
      html: `<p>${mensaje}</p><p>De: ${nombre} (${email})</p>`
    });

    res.json({ success: true, message: "Mensaje enviado correctamente" });

  } catch (error) {
    console.error("Error al enviar correo:", error);
    res.status(500).json({ success: false, message: "No se pudo enviar el mensaje", error: error.message });
  }
});

module.exports = router;
