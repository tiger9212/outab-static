import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HeaderTab from "./layout/HeaderTab";
import MenuModule from "./menu/MenuModule";
ReactDOM.render(
    <div className="box">
            <HeaderTab/>
        <div className="box-body">
            <div className="box-sider">
                <MenuModule/>
            </div>
            <div className="box-content">

            </div>
        </div>
        <div className="box-footer">

        </div>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
