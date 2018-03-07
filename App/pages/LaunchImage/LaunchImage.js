/**
 * Creacted by date on 2018/03/07
 * Function: 启动页面
 * Desc:
 */
import React, { Component } from 'react';
import { Image } from 'react-native';

import { ImgUrls } from '../../assets/';

export default class LaunchImage extends Component{
    render(){
        return(
            <Image source={ImgUrls.launchImage} style={{flex:1}} />
        )
    }
}