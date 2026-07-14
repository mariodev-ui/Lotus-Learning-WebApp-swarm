const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { logAudit } = require('../../services/auditLogger');

module.exports = {
    Mutation: {
        login: async (_, { email, password }, { dataSources }) => {
            const user = await dataSources.userAPI.findUserByEmail(email);
            if (!user) {
                throw new Error('No user found with that email');
            }

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                throw new Error('Invalid password');
            }

            // Log audit log entry
            await logAudit(user, 'login', { email });

            return {
                token: generateToken(user),
                user
            };
        }
    }
};

function generateToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
}
