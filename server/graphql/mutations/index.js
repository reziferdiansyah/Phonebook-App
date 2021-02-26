var addContact = require('./add').add;
var removeContact = require('./remove').remove;
var updateContact = require('./update').update;

module.exports = {
    addContact,
    removeContact,
    updateContact
}