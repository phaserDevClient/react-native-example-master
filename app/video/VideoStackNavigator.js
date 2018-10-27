import React from 'react';
import {createStackNavigator} from 'react-navigation';
import VideoComponent from './index';

const navigation = createStackNavigator({
    VideoComponent: {
        screen: VideoComponent,
        navigationOptions: {
            header: null
        }
    }
});
export default navigation;
