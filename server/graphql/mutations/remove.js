const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const contactType = require('../types/phonebook');
const services = require('../../services');

exports.remove = {
    type: contactType,
    args: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return services.deleteContact(params);
    }
}