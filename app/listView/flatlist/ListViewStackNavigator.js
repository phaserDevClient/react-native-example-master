import React from 'react';
import {createStackNavigator} from 'react-navigation';
import FlatList from '../flatlist/FlatList';

const ListViewStackNavigator = createStackNavigator({
    FlatList: {
        screen: FlatList,
        navigationOptions: {
            header: null
        }
    }
});

export default ListViewStackNavigator;
