import React from "react"
import {connect} from 'react-redux'
import axios from 'axios'
import { Switch, Route } from "react-router-dom"
import {addPropertyToState} from '../../redux/reducer/property/actions'
import {LoadCars} from '../../redux/reducer/cars/actions'
import {ListCar, ListProperty} from '../list-items'
import AddCar from '../add-car'
import AddProperty from '../add-property'
import ItemCart from '../item-cart'
import AuthForm from '../auth-form'
import RegForm from '../reg-form'


const App = (props) => {

  const {addPropertyToState, LoadCars} = props

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      LoadCars(data.cars)
      addPropertyToState(data.property)
    })
  }, [])

  return (
    <Switch>
      <Route path="/list-car" component={ListCar} />
      <Route path="/list-property" component={ListProperty} />
      <Route path="/add-car" component={AddCar} />
      <Route path="/add-property" component={AddProperty} />
      <Route path="/item-cart" component={ItemCart} />
      <Route path={["/", "/login"]} exact component={AuthForm} />
      <Route path="/reg" component={RegForm} />
    </Switch>
  )
}

const MapStateToProps = () => {
  return {}
}

const MapDispatchToProps = {
  addPropertyToState,
  LoadCars
}

export default connect(MapStateToProps, MapDispatchToProps)(App) 
