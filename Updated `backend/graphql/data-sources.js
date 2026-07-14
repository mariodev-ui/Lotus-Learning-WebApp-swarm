const UserAPI = require('./data-sources/user');
const CourseAPI = require('./data-sources/course');

class DataSources {
  constructor() {
    this.userAPI = new UserAPI();
    this.courseAPI = new CourseAPI();
  }
}

module.exports = { dataSources: () => new DataSources() };
