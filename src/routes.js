import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import {ListCar, ListProperty} from '../src/components/list-items'
import AddCar from '../src/components/add-car'
import AddProperty from '../src/components/add-property'
import ItemCart from '../src/components/item-cart'
import AuthForm from './components/auth-form'
import RegForm from './components/reg-form'


    const useRoutes = (isAuth) => {

    if (isAuth) {
        return(
            <Switch>
                <Route path="/list-car" >
                    <ListCar />
                </Route>
                <Route path="/list-property">
                    <ListProperty />
                </Route>
                <Route path="/add-car">
                    <AddCar/>
                </Route>
                <Route path="/add-property">
                    <AddProperty/>
                </Route>
                <Route path="/item-cart">
                    <ItemCart/>
                </Route>
                <Redirect to="/list-car" />

            </Switch>
        )
    }
    else{
        return(
            <Switch>
                <Route path={["/", "/login"]} exact>
                    <AuthForm/>
                </Route>
                <Route path="/reg">
                    <RegForm/>
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }
}
export default useRoutes