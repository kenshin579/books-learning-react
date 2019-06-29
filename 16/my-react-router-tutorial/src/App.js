import React from 'react';
import {Route} from 'react-router-dom';
import {About, Home} from 'pages';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    );
};

export default App;
