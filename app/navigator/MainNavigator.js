import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from '../mainmenu/index';
import TextHome from '../text/index';
import ListViewHome from '../listView/flatlist/index';
import TextNavigator from '../text/TextNavigator';
import ListNavigator from '../listView/flatlist/ListViewStackNavigator';

const navigator = createStackNavigator({
    Main: {screen: Home},
    Text: {screen: TextHome},
    ListView: {screen: ListViewHome},
    TextNavigator: TextNavigator,
    ListViewNavigator: ListNavigator

});
export default navigator;
