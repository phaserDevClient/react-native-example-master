import React from 'react';
import {AppRegistry, Dimensions} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import SideMenu from '../sidemenu/SideMenu';
import stackNav from '../sidemenu/stacknav';

const drawernav = DrawerNavigator({
    Item1: {
        screen: stackNav,
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
});
export default drawernav;
