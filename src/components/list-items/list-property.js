import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deletePropertyFromState} from '../../redux/reducer/property/actions'

import './list-items.scss'

const ListProperty = (props) =>  {

    const{property, deletePropertyFromState} = props
        
    return(
        <div className="container">
            <div className="row row-white">
                <div className="col">
                    <Link to="/list-car" className="list-link">Листинг товаров</Link>
                    <Link to="/list-property" className="list-link">Листинг проперти</Link>
                </div>
            </div>
            <div className="row">
                <div className="col col-reverce">
                    <button type="button" className="btn btn-warning"><Link to="/add-property">Добавить свойства</Link></button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table>
                        <thead>
                            <tr>
                                <th>Перечень проперти</th>
                                <th>Тип</th>
                                <th>Управление</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {property.map((prop, idx) => {
                                return(
                                    <Fragment key={`${idx}` + `${prop.name}`}>
                                        <tr>
                                            <td>{prop.name}</td>
                                            <td>{prop.type}</td>
                                            <td><Link onClick={() => deletePropertyFromState(prop.name)} to="#">Удалить</Link></td>
                                        </tr>
                                    </Fragment>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const MapDispatchToProps = {
    deletePropertyFromState
}

const MapStateToProps = (state) => {
    return{
        property: state.property.property,
        load: state.property.load
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(ListProperty) 