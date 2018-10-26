import React from 'react';
import {createSwitchNavigator} from 'react-navigation';

import MainNavigator from '../navigator/MainNavigator';
export default createSwitchNavigator({
    Home: MainNavigator
});
