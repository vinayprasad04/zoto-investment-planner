import { React } from 'react';
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
import '../../../styles/navbar.scss'
import logo from '../../../../images/logo.png'
import relaManger from '../../../../images/relaManger.png'
import clearNoIcon from '../../../../images/clearNoIcon.png'

const Header = () => {
    
    return (
        <div className="headerContainer">
            <header className="header">
                <div className="container group">
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
                    <div className="headerRight">
                        <div className="headSearch">
                            <input type="text" placeholder="Search " />
                        </div>
                        <div className="headInbox">
                            <a href="javascript:void(0);" className="headInboxBtn">
                                {" "}
                                <span>12</span>
                            </a>
                            <div className="cartPreviewBox inboxPreviewBox">
                                <div className="cartTopArrow" />
                                <h3>4 UNREAD</h3>
                                <article className="group">
                                    <div className="inboxUserpic">
                                        <img src={relaManger} />
                                    </div>
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
                                </article>
                                <article className="group">
                                    <div className="inboxUserpic">
                                        <img src={clearNoIcon} />
                                    </div>
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
                                {" "}
                                <span>2</span>
                            </a>
                            <div className="cartPreviewBox notifyPreviewBox">
                                <div className="cartTopArrow" />
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
                            {/*//notifyPreviewBox*/}
                        </div>
                        {/*//headNotification*/}
                        <div className="headCart">
                            <a href="javascript:void(0);" className="headCartBtn">
                                {" "}
                                <span>2</span>
                            </a>
                            {/* <div className="cartPreviewBox">
                                <div className="cartTopArrow" />
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
                            <div className="cartPreviewBox">
                                <div className="cartTopArrow" />
                                <article>
                                    <p>
                                        Kotak World Gold Standard fund has been added to your cart.{" "}
                                    </p>
                                    <div className="veiwCartBtn">
                                    <a href="javascript:void(0);">View Cart</a>
                                    </div>
                                </article>
                            </div>
                            {/*//cartPreviewBox*/}
                        </div>
                        {/*//headCart*/}
                        <div className="headLogIn">
                            <a href="javascript:void(0);">
                                <span>NG</span>
                                Nitin Garg
                            </a>
                            <div className="profileDropBox text-center">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0);">PROFILE</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">ACCOUNT SETTINGS</a>
                                    </li>
                                    <li>
                                        {/* <a href="${pageContext.request.contextPath}/logout"id="lgt_loginBtn">Logout </a> */}
                                        <a href="javascript:void(0);">Logout</a>
                                    </li>
                                </ul>
                            </div>
                            {/*//cartPreviewBox*/}
                        </div>
                        {/*//headLogout*/}
                    </div>
                    {/*//headerRight*/}
                </div>
                {/*//container*/}
            </header>
            {/*//header*/}
        </div>

    )
}

export default Header;




