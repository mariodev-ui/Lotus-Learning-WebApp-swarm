const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

            return {
                token: generateToken(user),
                refreshToken: generateRefreshToken(user)
            };
        },
        register: async (_, { email, password, name }, { dataSources }) => {
            const existingUser = await dataSources.userAPI.findUserByEmail(email);
            if (existingUser) {
                throw new Error('Email already in use');
            }

            const user = await dataSources.userAPI.createUser({ email, password, name });
            return {
                token: generateToken(user),
                refreshToken: generateRefreshToken(user)
            };
        },
        refreshToken: async (_, { refreshToken }, { dataSources }) => {
            try {
                const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
                const user = await dataSources.userAPI.findUserById(decoded.id);
                if (!user) {
                    throw new Error('Invalid refresh token');
                }

                return {
                    token: generateToken(user),
                    refreshToken: generateRefreshToken(user)
                };
            } catch (error) {
                throw new Error('Invalid refresh token');
            }
        }
    }
};

function generateToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

function generateRefreshToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
}
