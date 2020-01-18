import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Location from './LocationComponent';

// const TabBarComponent = props => <BottomTabBar {...props} />;

// These are the pages
const RouteConfigs = {
    Home: {
        screen: Home,
        tabBarOptions: {
            showIcon: true,
            iconStyle: {
                padding: 10,
                margin: 10
            }
        },
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon type='font-awesome' name="home" color={tintColor} size={34}/>
            )
        },
        iconStyle: {
            padding: 10,
            margin: 10
        }
    },
    About: {
        screen: About,
        tabBarOptions: {
            showIcon: true,
            iconStyle: {
                padding: 10,
                margin: 10
            }
        },
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon type='font-awesome' name='info' color={tintColor} size={34}/>
            )
        }
    },
    Menu: {
        screen: Menu,
        tabBarOptions: {
            showIcon: true,
            iconStyle: {
                padding: 10,
                margin: 10
            } 
        },
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon type='font-awesome' name='coffee' color={tintColor} size={34}/>
            )
        }
    },
    Location: {
        screen: Location,
        tabBarOptions: {
            showIcon: true,
            iconStyle: {
                padding: 10
            } 
        },
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon type='font-awesome' name='compass' color={tintColor} size={34}/>
            )
        }
    }
  }
  
  // Properties for the tab navigator (options for how it looks and functions)
  const TabNavigatorConfig = {
    initialRouteName: 'Home',
  }
  
  const BottomNav = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default createAppContainer(BottomNav);