import React from 'react';
import {Route} from 'react-router-dom';
// import {About, Home, Posts} from 'pages';
import {About, Home, Posts} from 'pages/index.async.js';
import Menu from "./components/Menu";
// import AsyncSplitMe from 'components/AsyncSplitMe';

const App = () => {
    return (
        <div>
            <Menu/>
            {/*<AsyncSplitMe/>*/}
            <Route exact path="/" component={Home}/>
            <Route path="/about/:name?" component={About}/>
            <Route path="/posts" component={Posts}/>
        </div>
    );
};

export default App;
