import React,{Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './list-items.scss'
import {LoadCars} from '../../redux/reducer/cars/actions'

const ListCar = (props) => {

    const {cars} = props
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/list-car" className="list-link">Листинг товаров</Link>
                    <Link to="/list-property" className="list-link">Листинг проперти</Link>
                </div>
            </div>
            <div className="row">
                <div className="col col-reverce">
                    <button type="button" className="btn btn-warning"><Link to="/add-car">Добавить товар</Link></button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table>
                        <thead>
                            <tr>
                                <th>Перечень товаров</th>
                                <th>Стоимость</th>
                                <th>Дата изменения</th>
                                <th>Управление</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map((car) => {
                                return(
                                    <Fragment key={car.id}>
                                        <tr>
                                            <td><Link to={{
                                                pathname: "/item-cart",
                                                item: car
                                            }}>{car.name}</Link></td>
                                            <td>{car.price}$</td>
                                            <td>{car.date}</td>
                                            <td>
                                                <Link to="#">Редактировать</Link>
                                                <Link to="#">Удалить</Link>
                                            </td>
                                        </tr>
                                    </Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const MapDispatchToProps = {
    LoadCars
}

const MapStateToProps = (state) => {
    return{
        cars: state.cars.cars
    }   
}

export default connect(MapStateToProps, MapDispatchToProps)(ListCar)  