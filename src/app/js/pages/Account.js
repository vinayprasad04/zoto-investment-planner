import { Link } from 'react-router-dom';
import "../../styles/common/account.scss";
import { FaGreaterThan } from "react-icons/fa";
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import Overview from './Overview';
// import Profile from './Profile';
// import Setting from './Setting';
// import Transactions from './Transactions';
// import Inbox from './Inbox';
// import CurrentHolding from './CurrentHolding';

const Account = () => {
    const headItem = [
        {
            path: "/",
            name: "",
            icon: ""
        }, {
            path: "/",
            name: "",
            icon: ""
        }, {
            path: "/",
            name: "",
            icon: ""
        }, {
            path: "/",
            name: "",
            icon: ""
        }, {
            path: "/",
            name: "",
            icon: ""
        }, {
            path: "/",
            name: "",
            icon: ""
        }
    ];
    return (
        <>
            <div className="container">
                <div className="breadcrums">
                    <Link className='breadcrums_link'>Home <FaGreaterThan className='breadcrums_link_icon' /></Link> <span>Account</span>
                </div>
                <div className="innerContainer">
                    <section className="accHead group">
                        <h1>Account & Settings</h1>
                        <Link to="/" className='secondary_btn_red small_btn manageBtn'>Manage</Link>
                        <div className="veiwFor">
                            <span>Veiw for</span>
                            <select name="" id="">
                                <option value="">Nitin Garg</option>
                            </select>
                        </div>
                    </section>
                    <div className="group">
                        <aside className="accountSidebarNav">

                        </aside>
                    </div>
                    <section className="accContent">

                    </section>
                </div>
            </div>
        </>
    )
}
export default Account;
