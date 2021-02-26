var { GraphQLSchema, GraphQLObjectType } = require('graphql');
var queryType = require('./queries/');
var mutations = require('./mutations/index');
const firebase = require("firebase");

// console.log(mutations)

exports.phonebookSchema = new GraphQLSchema({
    query: queryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
})

