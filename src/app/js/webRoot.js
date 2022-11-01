import {React} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
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
                <Switch>
                    <Route path="/counter"><Counter/></Route>
                    <Route path="/planner"><Planner/></Route>
                    <Route path="/stock-planner"><StockPlanner/></Route>
                    <Route path="/mutual-fund-planner"><Counter/></Route>
                    <Route path="/mix-planner"><Counter/></Route>
                    <Route path="/home"><Home/></Route>
                    
                    <Route path="/accountt"><Account/></Route>
                </Switch>
        </Router>
    );
}

//ygyugygy

export default WebRoot;
