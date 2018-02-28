/**
 * Created by marno on 2018/02/22
 * Function: 首页
 * Desc: 
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, InteractionManager } from 'react-native';

// 导入静态资源
import { ImgUrls, Colors, CommonStyles, Constants } from '../../assets/';
// 导入公用组件
import { ImgButton, TextButton } from '../../common/';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            city:'广州',
        }
    }

    render(){
        return (
            <View style={{flex:1,backgroundColor:'pink'}} >
                {/* 头部导航栏 */}
                { this.renderNavTop() }
            </View>
        )
    }

    renderNavTop(){
        return(
            <View style={styles.navTop} >
                <TouchableOpacity onPress={()=>{ alert('点击了城市文本按钮！')}}>
                    <Text style={styles.textWhint}> {this.state.city} </Text>
                </TouchableOpacity>
                <View style={styles.search} >
                    <TextInput
                        style={ styles.textIpt}
                        placeholder="输入商家、类品、商圈"
                        placeholderTextColor="#ccc"
                        underlineColorAndroid="transparent"
                        onEndEditing ={()=> alert('开始搜索！')}
                    />
                    <Image source={ImgUrls.home_navtop_search} style={styles.searchIcon} />
                </View>
                <ImgButton source={ ImgUrls.home_navtop_infromation} style={styles.navTopIcon} />
                <ImgButton onPress={()=>{this._navigate('Scanner')} } source={ ImgUrls.home_navtop_scanner} style={styles.navTopIcon} />
            </View>
        )
    }


    /* 页面跳转事件 */
    _navigate(screen){
        const {navigate} = this.props.navigation;
        navigate(screen)
    }

}

const styles = StyleSheet.create({
    /* 头部导航 */
    navTop:{
        width: '100%',
        height: 50,
        backgroundColor:Colors.app_color,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingLeft: 10,
        paddingRight: 10,
    },
    navTopIcon:{
        height: 26,
        width: 26,
    },
    search:{
        width: 240,
        height: 30,
        position: 'relative',
    },
    textIpt:{
        flex:1,
        borderRadius: 15,
        backgroundColor: Colors.white_fff,
        padding: 0,
        paddingLeft: 26,
    },
    searchIcon:{
        width: 18,
        height: 18,
        tintColor: '#ccc',
        position: 'absolute',
        top: "50%",
        left: 6,
        marginTop: -9,
    },
    textWhint:{
        color:Colors.white_fff,
    }

})