import React from 'react';
import {createStackNavigator} from 'react-navigation';
import TabBottom from './tabBottom/index';

const navigation = createStackNavigator({
    TabBottom: {
        screen: TabBottom,
        navigationOptions: {
            header: null
        }
    }
});
export default navigation;
