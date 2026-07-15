const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const { validateUrl } = require('./utils/urlValidator');
const isAuth = require('./middleware/is-auth');
const logger = require('./utils/logger');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(helmet());
app.use(bodyParser.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// URL Validation Middleware
app.use((req, res, next) => {
    if (req.method === 'POST' && req.body.url) {
        const url = req.body.url;
        if (!validateUrl(url)) {
            logger.error({ message: 'Invalid URL', url });
            return res.status(400).json({ error: 'Invalid URL' });
        }
    }
    next();
});

// Authentication Middleware
app.use(isAuth);

// Example Route
app.post('/submit-url', (req, res) => {
    const url = req.body.url;
    logger.info({ message: 'URL submitted successfully', url });
    // Process the URL
    res.json({ message: 'URL submitted successfully', url });
});

// Protected Routes
app.get('/protected-data', (req, res) => {
    res.json({ message: 'This is protected data' });
});

app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});
