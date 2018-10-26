import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from '../mainmenu/index';
import TextHome from '../text/index';
import TextNavigator from '../text/TextNavigator';

const navigator = createStackNavigator({
    Main: {screen: Home},
    Text: {screen: TextHome},
    TextNavigator: TextNavigator

});
export default navigator;
