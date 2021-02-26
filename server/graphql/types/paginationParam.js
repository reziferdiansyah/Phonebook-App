
const {GraphQLInputObjectType, GraphQLInt, GraphQLString}  = require('graphql');

const PaginationArgType = new GraphQLInputObjectType({
  name: 'PaginationArg',
  fields: {
    offset: {
      type: GraphQLInt,
      description: "Skip n rows."
    },
    limit: {
      type: GraphQLInt,
      description: "total data"
    },
    searchName: {
      type: GraphQLString,
      description: "Search name."
    },
    searchPhone: {
      type: GraphQLString,
      description: "Search Phone"
    },
  }
})

module.exports = PaginationArgType