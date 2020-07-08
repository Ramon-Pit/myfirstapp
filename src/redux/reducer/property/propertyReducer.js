
const initialState = {
    property: [],
    load: false
}

const newProperty = (state, action) => {
    const newProp = [...state.property, action.payload]
    return newProp
}

const deleteItem = ({property}, action) => {

    const propIndex = property.findIndex(({name}) => name === action.payload)

    return[
        ...property.slice(0, propIndex),
        ...property.slice(propIndex + 1)
    ]
}

const propertyReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case 'ADD_PROPERTY_TO_STATE':
            
            return{
                ...state,
                property: action.payload,
                load: true
            }

        case 'ADD_NEW_PROPERTY_TO_STATE':
            
            return{
                ...state,
                property: newProperty(state, action)
            }

        case 'DELETE_PROPERTY_FROM_STATE':

            return{
                ...state,
                property: deleteItem(state, action)
            }
            
        default: return state
        
    }
}

export default propertyReducer