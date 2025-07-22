const Message = require("../models/Message")
const nodemailer = require("nodemailer")

exports.sendMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." })
    }

    // Save message to MongoDB
    const newMessage = await Message.create({ name, email, message })

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to yourself
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    res.status(201).json({ message: "Message sent successfully!" })
  } catch (err) {
    next(err)
  }
}
