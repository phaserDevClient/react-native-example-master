import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from './subMenu/HomeMenu';
import NotificationScreen from './subMenu/NotificationMenu';

const Navigation = createDrawerNavigator({
    HomeMenu: {
        screen: HomeScreen
    },
    Notification: {
        screen: NotificationScreen,
    }
});

export default class NavigationDrawer extends Component {
    render() {
        return <Navigation/>
    }
}
