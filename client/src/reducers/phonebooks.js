const phonebooks = (state = { items: [], count: 0 }, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                items: [
                    {
                        id: action.id,
                        name: action.name,
                        phone: action.phone
                    },
                    ...state.items
                ]
            }

        case 'ADD_CONTACT_SUCCESS':
            const newData = state.items.map(item => {
                item.sent = true
                return item
            });

            return { ...state, items: newData }

        case 'ADD_CONTACT_FAILURE':
            const addDataFail = state.items.map((item) => {
                if (item.id === action.id) {
                    item.sent = false
                }
                return item
            });
            return { ...state, items: addDataFail }

        case 'LOAD_CONTACT_SUCCESS':
            const items = action.items.map((item) => {
                item.sent = true;
                return item
            })
            return { items, count: action.count }

        case 'LOAD_CONTACT_FAILURE':
            return state;

        case 'UPDATE_CONTACT':
            const dataUpdate = state.items.map(item => {
                if (item.id === action.id) {
                    return (
                        {
                            id: action.id,
                            name: action.name,
                            phone: action.phone,
                            sent: true
                        }
                    )
                }
                return item
            })
            return { ...state, items: dataUpdate }

        case 'DELETE_CONTACT':
            const dataDelete = state.items.filter(item => item.id !== action.id)
            return { ...state, items: dataDelete }

        case 'DElETE_CONTACT_SUCCESS':
            return state;

        case 'DElETE_CONTACT_FAILURE':
            return state;

        default:
            return state;
    }
}

export default phonebooks;