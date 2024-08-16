const express = require('express');
const router = express.Router();
const { sendEmail } = require('../emailService');

router.post('/send', async (req, res) => {
    const { to, subject, text } = req.body;

    const emailOptions = {
        from:  process.env.from || 'jatinder1901243@example.com',
        to,
        subject,
        text
    };

    try {
        await sendEmail(emailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Failed to send email');
    }
});

module.exports = router;
