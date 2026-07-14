const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/schema');

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
    console.log('Server is running on http://localhost:4000');
});
