import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export default class NotificationMenu extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../../assets/bell.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>
                    This is notification screen
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('HomeMenu')}
                    title="Go to Home"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        fontSize: 26,
        color: '#ff9c0a',
        fontWeight: '700'
    }
});
