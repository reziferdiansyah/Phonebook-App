const firebase = require('firebase')

const getContacts = (offset, limit, searchName, searchPhone) => {
    console.log("cKING:",offset, limit, searchName, searchPhone)
    const userReference = firebase.database().ref("/PhoneBook/");
    return (new Promise((resolve, reject) => {
        userReference.on("value", function (snapshot) {
            const folders = snapshot.val();
            if (folders === null) {
                resolve([]);
            } else {
                const data = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o]));
                let dataTest = data;
                if (searchName && searchPhone) {
                    dataTest = data.filter(item =>
                        item.name.toLowerCase().includes(searchName.toLowerCase()) && item.phone.includes(searchPhone)
                    )
                } else if (searchName) {
                    dataTest = data.filter(item =>
                        item.name.toLowerCase().includes(searchName.toLowerCase())
                    )
                } else if (searchPhone) {
                    dataTest = data.filter(item =>
                        item.phone.includes(searchPhone)
                    )
                }
                const dataRend = dataTest.reverse()
                const dataFilter = dataRend.splice(offset - 1, limit)
                resolve(dataFilter);
            }
            userReference.off("value");
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
            reject("The read failed: " + errorObject.code);
        });
    }));
}

const totalData = (searchName, searchPhone) => {
    const userReference = firebase.database().ref("/PhoneBook/");
    return (new Promise((resolve, reject) => {
        userReference.on("value", function (snapshot) {
            const folders = snapshot.val();
            if (folders === null) {
                resolve([]);
            } else {
                const data = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o]));

                let dataTest = data;
                if (searchName && searchPhone) {
                    dataTest = data.filter(item =>
                        item.name.toLowerCase() === searchName.toLowerCase() && item.phone === searchPhone
                    )
                } else if (searchName) {
                    dataTest = data.filter(item =>
                        item.name.toLowerCase() === searchName.toLowerCase()
                    )
                } else if (searchPhone) {
                    dataTest = data.filter(item =>
                        item.phone === searchPhone
                    )
                }

                resolve(dataTest.length);
            }
            userReference.off("value");
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
            reject("The read failed: " + errorObject.code);
        });
    }));
}

//Create new instance
const createContact = (contact) => {
    const referencePath = `/PhoneBook/${contact.id}/`;
    const userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.set({ name: contact.name, phone: contact.phone }, (error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(contact);
            }
        });
    }));
}

//Update existing instance
const updateContact = (contact) => {
    var referencePath = `/PhoneBook/${contact._id}/`;
    var userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.update({ name: contact.name, phone: contact.phone }, (error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(contact);
            }
        });
    }));
}

//Delete an instance
const deleteContact = (contact) => {
    var referencePath = `/PhoneBook/${contact._id}/`;
    var userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.remove((error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(contact);
            }
        })
    }));
}

module.exports = { getContacts, createContact, updateContact, deleteContact, totalData }