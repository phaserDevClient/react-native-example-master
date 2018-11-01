import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButtonCircle from './ActionButtonCircle';

export default class FABButtonCircle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    This is an fab button circle
                </Text>
                <ActionButtonCircle buttonColor={"rgba(231,76,60,1)"}>
                    <ActionButtonCircle.Item buttonColor={"#9b59b6"} onPress={() => {
                        console.log("Note tapped!");
                    }}>
                        <Icon name={"md-create"} style={styles.actionButtonIcon}/>
                    </ActionButtonCircle.Item>
                    <ActionButtonCircle.Item buttonColor={'#3498db'}
                                             onPress={() => console.log("Notification")}>
                        <Icon name={"md-notifications-off"} style={styles.actionButtonIcon}/>
                    </ActionButtonCircle.Item>
                    <ActionButtonCircle.Item buttonColor='#1abc9c' onPress={() => {
                        console.log("Press");
                    }}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon}/>
                    </ActionButtonCircle.Item>
                </ActionButtonCircle>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});
