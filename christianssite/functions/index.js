const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure email transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "claviolette.tech@gmail.com", // Your email address
    pass: functions.config().gmail.password, // Set up with firebase functions:config:set gmail.password="yourpassword"
  },
});

exports.sendContactNotification = functions.firestore
  .document("contacts/{contactId}")
  .onCreate(async (snap, context) => {
    const contactData = snap.data();

    // Email content
    const mailOptions = {
      from: "Christian Laviolette <claviolette.tech@gmail.com>",
      to: "christianlaviolette@outlook.com", // Where to send notifications
      subject: `New Contact Form Submission: ${contactData.subject}`,
      html: `
        <h2>New contact form submission from your portfolio website</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message.replace(/\n/g, "<br>")}</p>
        <p><strong>Time:</strong> ${new Date(contactData.timestamp.toDate()).toLocaleString()}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("New contact notification email sent");
      return null;
    } catch (error) {
      console.error("Error sending email:", error);
      return null;
    }
  });
