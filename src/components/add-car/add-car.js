import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './add-car.scss'

const AddCar = (props) => {

    return(           
        <div className="container">
            <div className="row">
                <div className="col col-rev">
                    <button type="button" className="btn btn-danger"><Link to="/list-car">Вернуться</Link></button>
                    <button type="button" className="btn btn-success"><Link to="#">Сохранить</Link></button>
                </div>
            </div>
            <div className="row row-center">
                <div className="col-6">
                    <form>
                        <h4>Добавление товара:</h4>
                                
                        <label>Добавление товара</label>
                        <div><input placeholder="Mercedes S550 4matic" type="text"/></div>
                                
                        <label>Стоимость товара</label>
                        <div><input placeholder="118 000 $" type="text"/></div>
                                
                        <label>Изображение</label>
                        <div><input placeholder="Image" type="text"/></div>
                                
                        <label>Описание</label>
                        <div><textarea placeholder="Описание товара" /></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const MapStateToProps = (state) => {
    return{
        cars: state.cars.cars,
        property: state.property.property
    }
}

const MapDispatchToProps = {

}

export default connect(MapStateToProps, MapDispatchToProps)(AddCar)