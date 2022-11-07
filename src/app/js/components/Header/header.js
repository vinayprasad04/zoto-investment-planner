import { React, useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Login } from './Login';
import "../../../styles/common/login.scss"
import { useSelector } from 'react-redux';



const Header = () => {
    const [state, setState] = useState({ loginTogal: false })
    const { pageAuth } = useSelector(store => store.authReducer)
    const navigate = useNavigate()
    


    return (
        <>
            <Navbar className='navbar' collapseOnSelect expand="lg">
                <div>
                    <a onClick={() => {
                        setState({ ...state, loginTogal: !state.loginTogal })
                    }}>login</a>
                    <Link to={'/account'}>account</Link>
                </div>
                {state.loginTogal && <Login setState={setState} />}
            </Navbar>
        </>
    )
}

export default Header;




