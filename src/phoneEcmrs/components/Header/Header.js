import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {ButtonContainer} from '../UI/ButtonContainer'


const Header = () => {
    return (
        <div className='container-flui'>
            <Nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                
                <Link to='/'>
                    <img src={logo} className='navbar-brand' alt="logo" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                        products
                        </Link>
                    </li>
                </ul>
                
                <Link to="/cart" className="cart">
                    <ButtonContainer cart>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus " />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </Nav>
        </div>
    )
}


const Nav = styled.div`
    background : var(--mainBlue) ;
    .nav-link{
        color : var(--mainWhite) !imporant ;
        font-size:1.3rem;
        text-transform:capitalize;
    }

    .cart{
        margin-left : auto ;
    }

    @media(max-width : 576px){
        .navbar-nav{
            display : flex ;
            flex-direction : row !imporant ;
        }
        .cart{
            margin :0 auto ;
        }
    }

`   



export default Header
