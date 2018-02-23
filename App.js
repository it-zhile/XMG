/**
 * Created by marno on 2018/02/22
 * Function: 入口类
 * Desc:
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/** 导入入口导航文件  */
import Index from './App/index';

export default class App extends Component<{}> {
  render() {
    return (
      <Index />
    );
  }
}