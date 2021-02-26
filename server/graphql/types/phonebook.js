const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = require('graphql');


// contact Type
const contactType = new GraphQLObjectType({
  name: 'contact',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    phone: {
      type: GraphQLString
    }
  }
});

module.exports = contactType