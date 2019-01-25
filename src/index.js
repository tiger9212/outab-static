import React from 'react';
import {render} from 'react-dom';
import Login from "./view/login/index";
import Common from "./layout/Common";
import {Route} from 'react-router';
import {HashRouter} from 'react-router-dom';
import './index.css';


class Main extends React.Component{
    render(){
        return(<HashRouter>
            <div>
                <Route path="/login" component={Login} />
                <Route path="/blog" component={Common}/>
            </div>
        </HashRouter>)
    }
}
render(
    <Main />,
    document.getElementById('root')
);
