import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from '../mainmenu/index';
import TextHome from '../text/index';
import ListViewHome from '../listView/index';
import TextNavigator from '../text/TextNavigator';
import ListNavigator from '../listView/ListViewStackNavigator';
import VideoNavigator from '../video/VideoStackNavigator';
import RecyclerNavigator from '../listView/recyclerlistview/RecyclerNavigation';
import AutoCompleteTextInputNavigator from '../autocompletetext/index';
import NavigationDrawer from '../drawermenu/index';

const navigator = createStackNavigator({
    Main: {screen: Home},
    Text: {screen: TextHome},
    ListView: {screen: ListViewHome},
    TextNavigator: TextNavigator,
    ListViewNavigator: ListNavigator,
    VideoNavigator: VideoNavigator,
    RecyclerNavigator: RecyclerNavigator,
    AutoCompleteTextInput: AutoCompleteTextInputNavigator,
    NavigationDrawer: NavigationDrawer

});
export default navigator;
