const { GraphQLObjectType, GraphQLList } = require('graphql');
const services = require('../../services');
const contactType = require('../types/phonebook');
const PaginationArgType = require('../types/paginationParam');
const PaginatedListType = require('../types/paginationOutput');

// Query
const ContactQueryType = {
    phonebooks: {
        type: PaginatedListType(contactType),
        args: {
            pagination: {
                type: PaginationArgType,
                defaultValue: { offset: 0, limit: 5, searchName: '', searchPhone: '' }
            },
        },
        resolve: (_, args) => {
            const { offset, limit, searchName, searchPhone } = args.pagination;
            // console.log(args.pagination)
            return {
                items: services.getContacts(offset, limit, searchName, searchPhone),
                count: services.totalData(searchName, searchPhone)
            }
        },
    }
}

module.exports = ContactQueryType