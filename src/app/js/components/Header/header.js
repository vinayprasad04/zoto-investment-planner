import { React, useState } from "react";
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../../../styles/navbar.scss"
import logo from "../../../../images/logo.png";
import relaManger from "../../../../images/relaManger.png";
import clearNoIcon from "../../../../images/clearNoIcon.png";

const Header = () => {
    const [toggleNotif, setToggleNoti] = useState(false)
    const handleHandle = () => {
        setToggleNoti(true)
    }
    const handleLeave = () => {
        setToggleNoti(false)
    }
    return (
        <>
            <Navbar className='navbar' collapseOnSelect expand="lg">
                <div>
                    <a onClick={() => {
                        setState({ ...state, loginTogal: !state.loginTogal })
                    }}>login</a>
                    <Link to={'/account'}>account</Link>
                </div>
            </Navbar>
        </>
    );
};

export default Header;
