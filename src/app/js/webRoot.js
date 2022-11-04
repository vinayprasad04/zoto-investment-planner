import {React} from 'react';
import {BrowserRouter as Router, Link, Route, Routes,} from 'react-router-dom';
//common
import Header from './components/Header/header'

// pages
import Home from './pages/home';
import Counter from './pages/counter';
import Planner from './pages/planner/planner';
import StockPlanner from './pages/planner/stockPlanner';
import Account from './pages/Account';


function WebRoot() {
    return (
        <Router>
            <Header/>
                <Routes>
                    <Route path="/counter" element={<Counter/>}/>
                    <Route path="/planner" element={<Planner/>}/>
                    <Route path="/stock-planner" element={<StockPlanner/>}/>
                    <Route path="/mutual-fund-planner" element={<Counter/>}/>
                    <Route path="/mix-planner" element={<Counter/>}/>
                    <Route path="/home" element={<Home/>}/>
                    
                    <Route path="/account" element={<Account/>}/>
                </Routes>
        </Router>
    );
}



export default WebRoot;
