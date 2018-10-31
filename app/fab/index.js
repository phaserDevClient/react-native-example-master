import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from './actionbutton/ActionButton';

export default class FABButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Basic FAB Example
                </Text>
                <ActionButton buttonColor={"rgba(231,76,60,1)"}>
                    <ActionButton.Item buttonColor={"#9b59b6"} title={"New Task"} onPress={() => {
                        console.log("Note tapped!");
                    }}>
                        <Icon name={"me-create"} style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={'#3498db'} title={"Notification"}
                                       onPress={() => console.log("Notification")}>
                        <Icon name={"me-notification-off"} style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {
                    }}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
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
