const {GraphQLObjectType, GraphQLInt, GraphQLList}  = require('graphql');

const PaginatedListType = (ItemType) => new GraphQLObjectType({
  name: 'Paginated' + ItemType,
  fields: {
    count: { type: GraphQLInt },
    items: { type: new GraphQLList(ItemType) }
  }
})

module.exports = PaginatedListType;