import React from 'react';
import {createStackNavigator} from 'react-navigation'

import RecyclerListView from './RecyclerBasic';
import RecyclerListViewData from './recyclertravel/index';

const navigation = createStackNavigator({
    RecylerListView: {
        screen: RecyclerListView,
        navigationOptions: {
            header: null
        }
    },
    RecyclerListViewData: {
        screen: RecyclerListViewData,
        navigationOptions: {
            header: null
        }
    }
});
export default navigation
