import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Hal1 from './pages/HalamanAbsen';
import Hal2 from './pages/HalamanIzin';
import Login from './pages/login';
import FooterTab from './FooterTab';
import Keluar from './pages/Keluar';
export const TabNavigate = TabNavigator({
    HalamanAbsen: { screen: Hal1 },
    HalamanIzin: { screen: Hal2 },
    Keluar : {screen: Keluar}
},
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        tabBarComponent: props => {
            return (<FooterTab navigation={props.navigation}/>)
        }
    });
    export const StackOverTabs = StackNavigator({
        Root:{screen:TabNavigate},
        GotoQuit:{screen:Keluar}
      });
      export const SignedOut = StackNavigator({
        Login:{screen:Login,navigationOptions:{ header:null}},
      })