/**
 * Created by marno on 2018/02/22
 * Function: 程序主入口
 * Desc: 在这里做一些全局配置，比如全局 Navigator配置，全局变量初始化等。
 */
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image } from 'react-native';
/* 导入导航器 */
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

/* 导入静态资源 */
import { ImgUrls, Colors, CommonStyles, Constants } from './assets/';
/* 导入公用组件 */
import { Scanner } from './common/';

/* 导入页面组件 */
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Mine from './pages/Mine/Mine';
import More from './pages/More/More';

const styles = StyleSheet.create({
    icon:{
      width: Platform.OS === 'ios' ? 30 : 24,
      height: Platform.OS === 'ios' ? 30 : 24,
    }
})


/** 
 * TabRouteConfig: tab 选项卡路由配置 
 * Home：路由名称
 * screen: 路由要跳转的页面
 * navigationOptions：对应页面的导航配置选项/每项 tabbar 的配置
 * tabBarLabel：导航标题/ tabbar 标题
 * tabBarIcon：导航的 icon 组件，可以根据 ({focused: boolean, tintColor: string})=>{ return ()} 方法来返回一个icon组件
 */
const TabRouteConfigs = {
    Home:{
        screen: Home,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon:({focused,tintColor})=>(
                <Image source={ focused ? ImgUrls.tabbar_home_active : ImgUrls.tabbar_home } style={[ styles.icon, {tintColor:tintColor} ]} />
            )
        }
    },
    Shop:{
        screen: Shop,
        navigationOptions:{
            tabBarLabel:'商家',
            tabBarIcon:({focused,tintColor})=>(
                <Image source={ focused ? ImgUrls.tabbar_shop_active : ImgUrls.tabbar_shop } style={[ styles.icon, {tintColor:tintColor} ]} />
            )
        }
    },
    Mine:{
        screen: Mine,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({focused,tintColor})=>(
                <Image source={ focused ? ImgUrls.tabbar_mine_active : ImgUrls.tabbar_mine } style={[ styles.icon, {tintColor:tintColor} ]} />
            )
        }
    },
    More:{
        screen: More,
        navigationOptions:{
            tabBarLabel:'更多',
            tabBarIcon:({focused,tintColor})=>(
                <Image source={ focused ? ImgUrls.tabbar_more_active : ImgUrls.tabbar_more } style={[ styles.icon, {tintColor:tintColor} ]} />
            )
        }
    }, 
}
/**
 * TabNavigatorConfigs：tab 选项卡配置
 * initialRouteName：初始显示的Tab对应的页面路由名称
 * tabBarComponent：Tab 选项卡组件，有 TabBarBottom（iOS中默认） 和 TabBarTop（ndroid中默认） 两个值
 * tabBarPosition：Tab 选项卡的位置，有 top 或 bottom 两个值
 * swipeEnabled：是否可以滑动切换Tab选项卡（默认为 true ）
 * animationEnabled：点击Tab选项卡切换界面是否需要动画（默认为 true ）
 * lazy：是否懒加载页面
 * tabBarOptions：Tab 选项卡的配置属性
 * activeTintColor：选中Tab的文字颜色
 */
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarOptions:{
        activeTintColor: Colors.app_color,
    }
}
const Tab = TabNavigator(TabRouteConfigs,TabNavigatorConfigs);


/**
 * RouteConfigs：导航器路由配置
 * Tab：路由名称
 * screen：路由要跳转的页面
 */
const RouteConfigs = {
    Tab: { screen: Tab },
    Scanner: { screen: Scanner },
}
/**
 * StackNavigatorConfigs：导航器配置
 * headerMode：页面跳转时，头部的动画模式，有 float（渐变，类似iOS的原生效果）、screen（标题与屏幕一起淡入淡出）、none（没有动画（注意：为none时头部导航不显示）） 三种
 */
const StackNavigatorConfigs = {
    headerMode: 'none',
}
const Navigator = StackNavigator(RouteConfigs,StackNavigatorConfigs);


export default Navigator;