module.exports = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'password',
    DB_NAME: process.env.DB_NAME || 'mydatabase',
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:8080',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key_here'
};
