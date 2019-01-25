/**
 * Created by Magic on 2019/1/24.
 */
import React, { Component } from 'react';
import LoginForm from './LoginFrom';
import './style.css';
import logo from '../../logo.svg';
export default class Login extends Component{
    render(){
        return (

            <div className="login-dev">
                    <img className="logo-div" src={logo}/>
                    <LoginForm/>
        </div>)
    }
}