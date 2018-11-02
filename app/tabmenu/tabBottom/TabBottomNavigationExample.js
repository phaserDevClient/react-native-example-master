import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation';
import HomeBottomMenu from './component/HomeBottom';
import SettingBottomMenu from './component/SettingBottom';

export default createBottomTabNavigator(
    {
        HomeBottomMenu: HomeBottomMenu,
        SettingsBottomMenu: SettingBottomMenu,
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'HomeBottomMenu') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'SettingsBottomMenu') {
                    iconName = `${focused ? 'ios-options' : 'md-options'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
)
