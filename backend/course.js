module.exports = {
    Query: {
        courses: async (_, __, { dataSources }) => {
            return await dataSources.courseAPI.getAllCourses();
        },
    },
};
