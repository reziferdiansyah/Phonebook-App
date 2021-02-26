//add user 
export const addContactSuccess = (data) => ({
    type: 'ADD_CONTACT_SUCCESS',
    data
})

export const addContactFailure = (id) => ({
    type: 'ADD_CONTACT_FAILURE',
    id
})

export const addContactView = (id, name, phone, count) => ({
    type: 'ADD_CONTACT',
    id, name, phone, count
})
export const addContactExists = (phone) => ({
    type: 'ADD_CONTACT_EXISTS',
    phone
})

export const addContact = (name, phone) => ({
    type: 'POST_CONTACT',
    name, phone   
})
//end add user

//load data 
export const loadContactSuccess = (data) => ({
    type: 'LOAD_CONTACT_SUCCESS',
    items: data.items,
    count: data.count
})

export const loadContactFailure = () => ({
    type: 'LOAD_CONTACT_FAILURE'
})

export const loadContact = (curpage, limit, searchName, searchPhone) => ({
    type: 'LOAD_CONTACT',
    curpage, limit, searchName, searchPhone
})
//end load data

//delete data 
export const deleteContactSuccess = (data) => ({
    type: 'DELETE_CONTACT_SUCCESS'
})

export const deleteContactFailure = () => ({
    type: 'DELETE_CONTACT_FAILURE'
})

export const deleteContactView = (id) => ({
    type: 'DELETE_CONTACT',
    id
})

export const deleteContact = (id) => ({
    type: 'REMOVE_CONTACT',
    id
})
//end delete data

//Edit data 
export const updateContactSuccess = (data) => ({
    type: 'UPDATE_CONTACT_SUCCESS',
    data
})

export const updateContactFailure = (id) => ({
    type: 'UPDATE_CONTACT_FAILURE',
    id
})

export const updateContactView = (id, name, phone, count) => ({
    type: 'UPDATE_CONTACT',
    id, name, phone, count
})

export const updateContact = (id, name, phone) => ({
    type: 'EDIT_CONTACT',
    id, name, phone
})
//end update data

//resend message 
export const resendContact = (id, name, phone) => ({
    type: 'RESEND_CONTACT',
    id, name, phone
});
//end resend message