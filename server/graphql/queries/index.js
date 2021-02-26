const {GraphQLObjectType}  = require('graphql');
const ContactQueryType = require('./phonebooks')

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...ContactQueryType,
  },
});

module.exports = QueryType