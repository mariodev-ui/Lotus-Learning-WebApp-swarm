const nodemailer = require('nodemailer');
const { validateEmail } = require('../utils/urlValidator');

module.exports = {
    sendEmail: async (to, subject, text) => {
        // Validate recipient email
        if (!validateEmail(to)) {
            throw new Error('Invalid email address');
        }

        // Check for required environment variables
        const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASSWORD'];
        for (const envVar of requiredEnvVars) {
            if (!process.env[envVar]) {
                throw new Error(`Missing environment variable: ${envVar}`);
            }
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        };

        try {
            console.log('Sending email...');
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error('Failed to send email');
        }
    },
};
