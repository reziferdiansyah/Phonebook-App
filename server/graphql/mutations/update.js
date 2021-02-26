const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const contactType = require('../types/phonebook');
const services = require('../../services');

exports.update = {
    type: contactType,
    args: {
        _id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        phone: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        return services.updateContact(params)
    }
}