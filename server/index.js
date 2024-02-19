// index.js (Node.js backend)
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const cors = require("cors");
const app = express();
const port = 3001;
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Set up Handlebars as the view engine
app.set("view engine", "handlebars");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route to handle form submission
app.post("/submit-form", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mokeke250@gmail.com",
        pass: "lxvycnellvurscyl",
      },
    });

    // Apply Handlebars template engine to the transporter
    transporter.use(
      "compile",
      hbs({
        viewEngine: {
          extname: ".hbs",
          layoutsDir: "views/",
          defaultLayout: "email-template",
          partialsDir: "views/",
        },
        viewPath: "views/",
        extName: ".hbs",
      })
    );

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Assuch Global Contact Form" <mokeke250@gmail.com>',
      to: "mokeke185@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      template: "email-template",
      context: {
        companyName: "Assuch Global",
        name,
        email,
        subject,
        message,
      },
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Form submitted successfully");
  } catch (error) {
    console.error("Error submitting form", error);
    res.status(500).send("Failed to submit form");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
