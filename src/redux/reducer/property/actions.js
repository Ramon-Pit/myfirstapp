const addPropertyToState = (property) => {
    return{
        type: 'ADD_PROPERTY_TO_STATE',
        payload: property
    }
}

const addNewPropertyToState = (property) => {
    return{
        type: 'ADD_NEW_PROPERTY_TO_STATE',
        payload: property
    }
}

const deletePropertyFromState = (name) => {
    return{
        type: 'DELETE_PROPERTY_FROM_STATE',
        payload: name
    }
}

export {
    addPropertyToState,
    addNewPropertyToState,
    deletePropertyFromState
}