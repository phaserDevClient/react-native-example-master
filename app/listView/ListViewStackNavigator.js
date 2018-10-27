import React from 'react';
import {createStackNavigator} from 'react-navigation';
import FlatList from './flatlist/FlatList';
import SectionList from './sectionlist/index';

const ListViewStackNavigator = createStackNavigator({
    FlatList: {
        screen: FlatList,
        navigationOptions: {
            header: null
        }
    },
    SectionList: {
        screen: SectionList,
        navigationOptions: {
            header: null
        }
    }
});

export default ListViewStackNavigator;
