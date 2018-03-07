/**
 * Created by marno on 2018/02/22
 * Function: 更多
 * Desc: 
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { ImgUrls, Colors, CommonStyles, Constants } from '../../assets/';
import { ImgButton } from '../../common/';

export default class More extends Component{
    render(){
        return (
            <View style={{flex:1,backgroundColor: 'yellow'}}>
                {/* 头部导航 */}
                { this.renderNavBar() }
            </View>
        )
    }

    /**
     * renderNavBar(){return()} 头部导航函数 
     */
    renderNavBar(){
        return(
            <View style={styles.navbar} >
                <ImgButton source={ImgUrls.icon_setting} style={[styles.iconSetting,{tintColor: 'transparent'}]} />
                <Text style={styles.title}>更多</Text>
                <ImgButton onPress={()=>{alert('点击了设置按钮')}} source={ImgUrls.icon_setting} style={styles.iconSetting} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navbar:{
        width: '100%',
        height: 50,
        backgroundColor: Colors.app_color,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'relative',
    },
    title:{
        color: '#fff',
        fontSize: 18,
    },
    iconSetting:{
        width: 26,
        height: 26,
        tintColor: '#fff',
    }
})