import {combineReducers} from 'redux'
import carsReducer from './cars/carsReducer'
import propertyReducer from './property/propertyReducer'


const rootReducer = combineReducers({
    cars: carsReducer,
    property: propertyReducer
})

export default rootReducer