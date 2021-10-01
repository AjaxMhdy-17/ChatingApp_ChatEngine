import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import classes from './Index.module.css'
import { AuthProvider } from './Context/AuthContext'
import All from './components/All'

function Index() {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <All/>
                </AuthProvider>
            </Router>
        </div>
    )
}

export default Index
