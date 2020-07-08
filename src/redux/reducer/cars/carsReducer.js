const initialState = {
    cars: []
}

const carsReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case 'ADD_CAR_TO_STATE':
            return{
                ...state,          
                cars: action.payload
            }

        default: return state
    }
}

export default carsReducer