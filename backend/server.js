const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { validateUrl } = require('./utils/urlValidator');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(helmet());
app.use(bodyParser.json());

// URL Validation Middleware
app.use((req, res, next) => {
    if (req.method === 'POST' && req.body.url) {
        const url = req.body.url;
        if (!validateUrl(url)) {
            return res.status(400).json({ error: 'Invalid URL' });
        }
    }
    next();
});

// Example Route
app.post('/submit-url', (req, res) => {
    const url = req.body.url;
    // Process the URL
    res.json({ message: 'URL submitted successfully', url });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
