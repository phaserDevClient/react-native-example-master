import React from 'react';
import {createStackNavigator} from 'react-navigation';
import ActionButtons from './actionbutton/index';
import ActionButtonCircles from './actionbuttoncircle/index';

const FloatingButtonStackNavigator = createStackNavigator({
    Basic: {
        screen: ActionButtons,
        navigationOptions: {
            header: null
        }
    },
    Circle: {
        screen: ActionButtonCircles,
        navigationOptions: {
            header: null
        }
    }
});
export default FloatingButtonStackNavigator;
