const { gql } = require('apollo-server-express');
const Audit = require('../models/Audit');

const typeDefs = gql`
    extend type Mutation {
        createAuditLog(action: String!, details: JSON): Audit
    }

    type Audit {
        id: ID!
        user: User!
        action: String!
        details: JSON!
        timestamp: Date!
    }
`;

const resolvers = {
    Mutation: {
        createAuditLog: async (_, { action, details }, { dataSources }) => {
            const auditLog = new Audit({
                user: dataSources.userAPI.getCurrentUser(),
                action,
                details
            });
            await auditLog.save();
            return auditLog;
        }
    },
    Audit: {
        user: async (parent, _, { dataSources }) => {
            return await dataSources.userAPI.getUserById(parent.user);
        }
    }
};

module.exports = { typeDefs, resolvers };
