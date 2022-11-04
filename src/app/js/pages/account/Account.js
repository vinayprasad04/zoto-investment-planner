import { Link, Outlet, useNavigate } from 'react-router-dom';
import "../../../styles/common/account.scss";
import { FaGreaterThan } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';


const Account = () => {

    const { pageAuth } = useSelector(store => store.authReducer)
    console.log(pageAuth)
    const navigate=useNavigate()
    useEffect(()=>{
        if(!pageAuth){
            navigate('/')
        }
    })

    return (
        <>
            {pageAuth &&
                <div className="account">
                    <div className="breadcrums">
                        <Link className='breadcrums_link'>Home <FaGreaterThan className='breadcrums_link_icon' /></Link> <span>Account</span>
                    </div>
                    <div className="innerContainer">
                        <section className="accHead group">
                            <h1>Account & Settings</h1>
                            <div className='viewContainer'>
                                <div className="veiwFor">
                                    <span>Veiw for</span>
                                    <select name="" id="">
                                        <option value="">Nitin Garg</option>
                                    </select>
                                </div>
                                <Link to="" className='secondary_btn_red small_btn manageBtn'>Manage</Link>
                            </div>
                        </section>
                        <div className="group">
                            <aside className="accountSidebarNav">
                                <ul>
                                    <li><Link to="/account/overview" className='linkImg overviewLink'>Overview</Link></li>
                                    <li><Link to="/account/profile" className='linkImg profileLink '>PROFILE</Link></li>
                                    <li><Link to="/account/currentholdings" className='linkImg currentHoldLink'>CURRENT HOLDINGS</Link></li>
                                    <li><Link to="/account/transactions" className='linkImg transactionLink'>TRANSACTIONS</Link></li>
                                    <li><Link to="/account/inbox" className='linkImg inboxLink'>INBOX</Link></li>
                                    <li><Link to="/account/setting" className='linkImg settingsLink'>SETTING</Link></li>
                                </ul>
                            </aside>
                            <section className="accContent">
                                <Outlet />
                            </section>
                        </div>
                    </div>
                </div>}
        </>
    )
}
export default Account;
