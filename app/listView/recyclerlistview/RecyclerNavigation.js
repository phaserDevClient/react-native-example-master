import React from 'react';
import {createStackNavigator} from 'react-navigation'

import RecyclerListView from './RecyclerBasic';
import RecyclerListViewWithData from './recyclerwithdata/index'

const navigation = createStackNavigator({
    RecylerListView: {
        screen: RecyclerListView,
        navigationOptions: {
            header: null
        }
    },
    RecylerListViewData: {
        screen: RecyclerListViewWithData,
        navigationOptions: {
            header: null
        }
    }
});
export default navigation
