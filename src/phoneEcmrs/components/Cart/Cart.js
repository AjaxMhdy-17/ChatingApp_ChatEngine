import React from 'react'

import { UseMainContext } from '../../context/Context'
import Title from '../UI/Title'
import CartColumn from './CartColumn'
import CartList from './CartList'
import CartTotal from './CartTotal'
import EmptyCart from './EmptyCart'

function Cart() {

    const ctx = UseMainContext();
  
    console.log(ctx.cart);
    const cartList = ctx.cart ;


    if( ctx.cart.length > 0 ){
        return (
            <div>
                <Title name='your' title='cart'/>
                <CartColumn/>
                <CartList cartList={cartList}/>
                <CartTotal/>
            </div>
        )
    }
    else{
        return (
            <EmptyCart/>
        )
    }

   
}

export default Cart
