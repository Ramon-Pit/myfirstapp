const LoadCars = (cars) => {
    return{
        type: 'ADD_CAR_TO_STATE',
        payload: cars
    }
}

export{
    LoadCars
}