import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

//common
import Header from './components/Header/header'

// pages
import Home from './pages/home';
import Counter from './pages/counter';
import Planner from './pages/planner/planner';
import StockPlanner from './pages/planner/stockPlanner';
import Account from './pages/account/Account';
import Overview from './pages/account/Overview';
import Inbox from './pages/account/Inbox';
import Profile from './pages/account/Profile'
import CurrentHolding from './pages/account/CurrentHolding'
import Transactions from './pages/account/Transactions'
import Setting from './pages/account/Setting'
import { useEffect } from 'react';
import { accountRefresh } from '../../reducer/authReducer';
import { useDispatch } from 'react-redux';

function WebRoot() {

    const dispatch=useDispatch()

    // useEffect(()=>{
    //     dispatch(accountRefresh())
    // },[])

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/counter" element={<Counter />} />
                <Route path="/planner" element={<Planner />} />
                <Route path="/stock-planner" element={<StockPlanner />} />
                <Route path="/mutual-fund-planner" element={<Counter />} />
                <Route path="/mix-planner" element={<Counter />} />
                <Route path="/" element={<Home />} />

                <Route exact path="/account" element={<Account />}>
                    <Route exact path="/account/overview" element={<Overview />} />
                    <Route exact path="/account/profile" element={<Profile />} />
                    <Route exact path="/account/currentholdings" element={<CurrentHolding />} />
                    <Route exact path="/account/transactions" element={<Transactions />} />
                    <Route exact path="/account/inbox" element={<Inbox />} />
                    <Route exact path="/account/setting" element={<Setting />} />
                </Route>
            </Routes>
        </Router>
    );
}



export default WebRoot;
