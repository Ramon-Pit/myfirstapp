import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addNewPropertyToState} from '../../redux/reducer/property/actions'

import './add-property.scss'



const AddProperty = ({addNewPropertyToState, propId}) => {

    const [name, setProp] = React.useState({})
    const [type, setType] = React.useState()

    const OnInputChange = (e) => {
        setProp(e.target.value)
    }

    const OnCkeckChange = (e) => {
        setType(e.target.value)
    }
    
    const OnSubmitFunc = (e) => {
        e.preventDefault()
        addNewPropertyToState({
            name: name,
            type: type
        })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col col-rev">
                    <button type="button" className="btn btn-danger"><Link to="/list-property">Вернуться</Link></button>
                    <button type="button" className="btn btn-success" onClick={OnSubmitFunc}><Link to="/list-property">Сохранить</Link></button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4><b>Добавление свойства</b></h4>
                    <form onSubmit={OnSubmitFunc}>
                        <label><b>Название свойства</b></label>
                        <div><input 
                                type="text" 
                                placeholder="Цвет авто"
                                onChange={OnInputChange}
                            /></div>

                        <label><b>Укажите тип свойства</b></label>
                        <p><input 
                                type="radio" 
                                name="propertyType" 
                                value="dropdown" 
                                onChange={OnCkeckChange}
                            /> Dropdown</p>
                        <p><input 
                                type="radio" 
                                name="propertyType" 
                                value="number" 
                                onChange={OnCkeckChange}
                            /> Number</p>
                        <p><input 
                                type="radio" 
                                name="propertyType" 
                                value="string" 
                                onChange={OnCkeckChange}
                            /> String</p>
                    </form>
                </div>
            </div>
        </div>
    )
}


const MapStateToProps = () => {
    return{}
}

const MapDispatchToProps = {
    addNewPropertyToState
}

export default connect(MapStateToProps, MapDispatchToProps)(AddProperty)