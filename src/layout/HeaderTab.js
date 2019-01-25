/**
 * Created by Magic on 2017/8/18.
 */
import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import logo from './logo.svg';
import './app.css';

export default class  HeaderTab extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
                </Menu.Item>
            </Menu>
        );
        return(
        <div className="box-header">
            <div className="logo-div">
                <img src={logo} className="app-logo" alt="logo" />
            </div>
            <p className="header-welc">
                WELLCOME OUTAB
            </p>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    Hover me <Icon type="down" />
                </a>
            </Dropdown>
        </div>
        )
    }
}
