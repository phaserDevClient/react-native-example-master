import React from 'react';
import {createStackNavigator} from 'react-navigation';
import FlatList from './flatlist/FlatList';
import SectionList from './sectionlist/index';
import RecyclerList from './recyclerlistview/index';
import {Platform} from "react-native";

const ListViewStackNavigator = createStackNavigator(
    {
    FlatList: {
        screen: FlatList
    },
    SectionList: {
        screen: SectionList,
    },
    RecyclerListView: {
        screen: RecyclerList,
    }

    },
    {
        headerMode: 'modal',
        mode: Platform.OS === "ios" ? "modal" : "card",
        navigationOptions: {
            cardStack: {
                gesturesEnabled: false
            },
            gesturesEnabled: false,
            headerBackTitle: null
        },
        gesturesEnabled: false,
    }
);

export default ListViewStackNavigator;
