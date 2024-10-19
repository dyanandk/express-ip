const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT ||5500;

// Middleware to get client's IP address
app.set('trust proxy', true);  // Trust proxies to get the real client IP address

app.get('/ip-details', async (req, res) => {
    const clientIP = req.ip;  // Get client's IP address
    const ip = clientIP === '::1' ? 'your-public-ip' : clientIP;  // For localhost, use a real IP

    try {
        // Fetch IP details from ip-api.com
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        res.json(response.data);  // Return the IP details as JSON
    } catch (error) {
        res.status(500).json({ error: 'Error fetching IP details' });
    }
});
app.get('/',(req,res)=>{res.send("I am Okay and you, be always Okay");})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
