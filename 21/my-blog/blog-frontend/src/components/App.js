import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {EditorPage, ListPage, NotFoundPage, PostPage} from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ListPage}/>
                <Route path="/page/:page" component={ListPage}/>
                <Route path="/tag/:tag/:page?" component={ListPage}/>
                <Route path="/post/:id" component={PostPage}/>
                <Route path="/editor" component={EditorPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
};

export default App;
