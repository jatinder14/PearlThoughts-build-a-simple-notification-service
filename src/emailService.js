const nodemailer = require('nodemailer');

const primaryTransporter = nodemailer.createTransport({
    service: process.env.SERVICE || 'gmail',
    auth: {
        user:  process.env.EMAIL_USER || 'jatinder1901243@gmail.com',
        pass:  process.env.EMAIL_PASS || 'ybri zyhh dfne grhd'
    }
});

const backupTransporter = nodemailer.createTransport({
    service: process.env.BACKUPSERVICE || 'yahoo',
    auth: {
        user:  process.env.BACKUP_EMAIL_USER || 'jatinder1901243@yahoo.com',
        pass:  process.env.BACKUP_EMAIL_PASS || 'ybri zyhh dfne grhd'
    }
});

async function sendEmail(emailOptions, retries = 3) {
    try {
        await primaryTransporter.sendMail(emailOptions);
        console.log('Email sent successfully using primary service');
    } catch (error) {
        console.error('Primary service failed:', error.message);
        
        if (retries > 0) {
            console.log(`Retrying... (${3 - retries + 1})`);
            return sendEmail(emailOptions, retries - 1);
        } else {
            console.log('Switching to backup service');
            try {
                await backupTransporter.sendMail(emailOptions);
                console.log('Email sent successfully using backup service');
            } catch (backupError) {
                console.error('Backup service also failed:', backupError.message);
                throw new Error('All email services failed');
            }
        }
    }
}

module.exports = { sendEmail };
