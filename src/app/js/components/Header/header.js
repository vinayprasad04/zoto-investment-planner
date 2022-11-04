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
                {/* <Container>
                <Navbar.Brand href="/">Zoto Investing </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className={'nav-link'}>Home</Link>


                        <Link to="/stock-planner" className={'nav-link'}>Goals</Link>
                        <Link to="/mutual-fund-planner" className={'nav-link'}>Mutual Fund Planner</Link>
                        <Link to="/mix-planner" className={'nav-link'}>Mix Planner</Link>

                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <Link to="/counter" className={'nav-link'}>counter</Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container> */}
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




