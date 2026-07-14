const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserAPI {
  async findUserByEmail(email) {
    // Simulate database lookup
    return { id: '1', email, password: await bcrypt.hash('password', 10) };
  }
}

module.exports = UserAPI;
