/**
 * Created by Magic on 2019/1/24.
 */
import React from 'react';
import HeaderTab from "./HeaderTab";
import MenuModule from "../menu/MenuModule";
export  default class Common{
    render(){
        return (<div className="box">
            <HeaderTab/>
            <div className="box-body">
                <div className="box-sider">
                    <MenuModule/>
                </div>
                <div className="box-content">
                    this is content
                </div>
            </div>
            <div className="box-footer">

            </div>
        </div>)
    }
}