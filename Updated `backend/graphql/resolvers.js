const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { dataSources } = require('./data-sources');

const resolvers = {
  Query: {
    courses: async (_, __, { dataSources }) => {
      return await dataSources.courseAPI.getAllCourses();
    },
  },
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

      return { token: generateToken(user) };
    },
  },
};

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

module.exports = resolvers;
