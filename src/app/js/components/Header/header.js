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
        <div className="headerContainer">
            <header className="header">
                <div className="logo">
                    <a href="javascript:void(0);">
                        <img src={logo} alt="prosperx" />
                    </a>
                </div>
                {/*//logo*/}
                <nav className="navigation">
                    <ul>
                        <li>
                            <a href="javascript:void(0);">Products</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">Goals</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">Community</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">Ask a Question</a>
                        </li>
                    </ul>
                </nav>
                {/*//navigation*/}
            </header>
            {/*//header*/}
            <div className="nav-searchBar">
                <div className="nav-searchBar-inner">
                    <input type="text" placeholder="Search " />
                </div>
                <div className="headerRight">
                    <div className="headInbox">
                        <a href="javascript:void(0);" className="headInboxBtn">
                            {" "}
                            <span>2</span>
                        </a>
                        <div className="inboxPreviewBox ">
                            <h3>2 UNREAD</h3>
                            <article className="group">
                                <div className="inboxUserpic">
                                    <img src={relaManger} />

                                    <div className="inboxNotCont">
                                        <strong>Nikhil Dua</strong>
                                        <br />
                                        <em>
                                            Hi there thanks for sending request for your Investment. If
                                            you are considering to final…
                                        </em>
                                        <br />
                                        Yesterday, 09:43pm
                                    </div>
                                </div>
                            </article>
                            <article className="group">
                                <div className="inboxUserpic">
                                    <img src={clearNoIcon} />

                                    <div className="inboxNotCont">
                                        <strong>PROSPERX Support</strong>
                                        <br />
                                        <em>
                                            Hi there thanks for sending request for your Investment. If
                                            you are considering to final…
                                        </em>
                                        <br />
                                        12th July
                                    </div>
                                </div>
                            </article>
                            <div className="allMessageLink">
                                <a href="javascript:void(0);">All Messages</a>
                            </div>
                        </div>
                        {/*//inboxPreviewBox*/}
                    </div>
                    {/*//headInbox*/}
                    <div className="headNotification">
                        <a href="javascript:void(0);" className="headNotificationBtn">
                            {/* onMouseEnter={handleHandle} onMouseLeave={handleLeave} */}
                            {" "}
                            <span>2</span>
                        </a>
                        {/* {toggleNotif && */}
                        <div className="notiPreviewBox">
                            <h3>NOTIFICATIONS</h3>
                            <article className="clearNotify">
                                <strong>
                                    Your documents are approved for Axis Mutual Fund Purchase.{" "}
                                </strong>
                                <br />
                                Yesterday, 09:43pm
                            </article>
                            <article className="clearNotify">
                                <strong>Example notification text here</strong>
                                <br />
                                Yesterday, 09:43pm
                            </article>
                            <article className="notClearNotify">
                                <strong>
                                    New! Now you can plan &amp; start investing with Goal based
                                    approach.
                                </strong>
                                <br />
                                18th July, 05:10pm
                            </article>
                        </div>
                        {/* } */}
                        {/*//notifyPreviewBox*/}
                    </div>
                    {/*//headNotification*/}
                    <div className="headCart">
                        <a href="javascript:void(0);" className="headCartBtn">
                            {" "}
                            <span>2</span>
                        </a>
                        {/* <div className="cartPreviewBox">
                        <h3>2 Products in your Cart</h3>
                        <article>
                            <strong>Kotak World Gold Standard fund.</strong>
                            <br />
                            SIP, Monthly, Rs.18,000
                        </article>
                        <article>
                            <strong>DSP Blackrock Gold Fund</strong>
                            <br />
                            SIP, Monthly, Rs.18,000
                        </article>
                        <div className="veiwCartBtn">
                            <a href="javascript:void(0);">View Cart</a>
                        </div>
                    </div> */}
                        {/*//cartPreviewBox*/}
                        <div className="cartNotificationBox">
                            <article>
                                <p>
                                    Kotak World Gold Standard fund has been added to your cart.{" "}
                                </p>
                                <a href="javascript:void(0);">View Cart</a>
                            </article>
                        </div>
                        {/*//cartPreviewBox*/}
                    </div>
                    {/*//headCart*/}
                    <div className="headLogIn">
                        <a href="javascript:void(0);">
                            <span className="headLogIn-span">NG</span>
                            Nitin Garg
                        </a>
                        <div className="profileDropBox">

                            <a href="javascript:void(0);">PROFILE</a>

                            <a href="javascript:void(0);">ACCOUNT SETTINGS</a>

                            {/* // <a href="${pageContext.request.contextPath}/logout"id="lgt_loginBtn">Logout</a> */}
                            <a href="javascript:void(0);">Logout</a>
                        </div>
                        {/*//cartPreviewBox*/}
                    </div>
                    {/* //headerLogin */}
                </div>
                {/*//headerRight*/}

            </div>
            {/* //nav-searchBar */}
        </div>
    );
};

export default Header;
