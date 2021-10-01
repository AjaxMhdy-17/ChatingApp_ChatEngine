import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../Context/AuthContext'

function Header() {

    const ctx = useAuthContext()

    const user = ctx.user

    return (
        <div className='container-fluid'>
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="#home">SimpleChat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Link className='nav-link' to="/">HOME</Link>
                        <Link className='nav-link' to="/chats">CHATS</Link>
                        {user !== null ? (
                            <Link
                                className='nav-link'
                                to="/login"
                                onClick={ctx.handleLogout}
                            >
                                LOGOUT
                            </Link>
                        ) : (
                            <Link className='nav-link' to="/login">LOGIN</Link>
                        )}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
