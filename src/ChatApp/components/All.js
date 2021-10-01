import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from './Header'
import Chats from './Chats'
import Login from './Login'

function All() {
    return (
        <>
        <Header/>
        <Switch>
            
            <Route exact path='/chats'>
                <Chats />
            </Route>
            <Route exact path='/login'>
                <Login />
            </Route>
        </Switch>
        </>
    )
}

export default All
