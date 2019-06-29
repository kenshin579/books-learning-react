import React from 'react';
import {Route} from 'react-router-dom';
import {About, Home} from 'pages';
import Menu from "./components/Menu";

const App = () => {
    return (
        <div>
            <Menu/>
            <Route exact path="/" component={Home}/>
            <Route path="/about/:name?" component={About}/>
        </div>
    );
};

export default App;
