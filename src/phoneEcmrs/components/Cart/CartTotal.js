import React from 'react'

import { UseMainContext } from '../../context/Context'
import { Link } from 'react-router-dom';
import CheckOut from './CheckOut'

function CartTotal(props) {

    const ctx = UseMainContext();
    const cartCalc = ctx.cartCalc ;
    const cart = ctx.cart
    console.log(cartCalc);

    if( cart.length === 0 ){
        return null 
    }
    else{
        return (
            <div className='container'>
                <div className="row">
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link>
                            <button 
                            onClick={() => ctx.clearCart()}
                            className='btn btn-outline-danger text-uppercase mb-3 px-5'>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title"> subtotal :</span>{" "}
                            <strong>$ {cartCalc.cartSubTotal} </strong>
                        </h5>
                        <h5>
                            <span className="text-title"> tax :</span>{" "}
                            <strong>$ {cartCalc.cartTax} </strong>
                        </h5>
                        <h5>
                            <span className="text-title"> total :</span>{" "}
                            <strong>$ {cartCalc.cartTotal} </strong>
                        </h5>
                        <CheckOut/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartTotal
