class CourseAPI {
  async getAllCourses() {
    // Simulate database lookup
    return [
      { id: '1', title: 'Introduction to GraphQL', description: 'Learn the basics of GraphQL' },
      { id: '2', title: 'Advanced GraphQL', description: 'Dive deep into GraphQL' },
    ];
  }
}

module.exports = CourseAPI;
