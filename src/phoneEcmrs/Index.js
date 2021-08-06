import React from 'react'

import './index.css' ;
import {ButtonContainer} from './components/UI/ButtonContainer'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import ProductList from './components/Products/ProductList'
import ProductDetail from './components/Products/ProductDetail';
import Modal from './components/Modal/Modal'
import Cart from './components/Cart/Cart'

const Index = () => {
    return (
        <div className='mainBody'>
            <Router>
                <Modal/>
                <Header/>
                <Route exact path='/'>
                    <ProductList/>
                </Route>
                <Route exact path='/cart'>
                    <Cart/>
                </Route>
                <Route exact path='/detail'>
                    <ProductDetail/>
                </Route>
               
            </Router>
        </div>
    )
}

export default Index
