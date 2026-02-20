const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    const incoming = req.body.Body; // message from WhatsApp
    const from = req.body.From; // sender phone number

    console.log('From:', from, 'Message:', incoming);

    // Temporary reply
    const reply = `Received your message: "${incoming}"`;

    // Send reply via Twilio API
    await axios.post(`https://api.twilio.com/2010-04-01/Accounts/YOUR_ACCOUNT_SID/Messages.json`, {
        To: from,
        From: 'whatsapp:+14155238886', // your Twilio sandbox number
        Body: reply
    }, {
        auth: {
            username: process.env.'TWILIO_ACCOUNT_SID // 
            password: process.env.'TWILIO_AUTH_TOKEN // 
        }
    });

    res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
});
