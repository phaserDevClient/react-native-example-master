import React, {Component} from 'react';
// import DrawNavigation from './app/sidemenu/index';
// import Home from './app/mainmenu/index';
// import {createStackNavigator} from 'react-navigation'
//
// const navigator = createStackNavigator({
//     Main: {screen: Home}
// });
// export default navigator;
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import AppNavigator from './app/navigator/AppNavigator';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <AppNavigator/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
