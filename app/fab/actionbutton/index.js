import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from './ActionButton';

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
                        if (Platform.OS === 'android') {
                            ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);

                            ToastAndroid.showWithGravity(
                                'All Your Base Are Belong To Us',
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER
                            );

                            ToastAndroid.showWithGravityAndOffset(
                                'A wild toast appeared!',
                                ToastAndroid.LONG,
                                ToastAndroid.BOTTOM,
                                25,
                                50
                            );
                        }
                    }}>
                        <Icon name={"md-create"} style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={'#3498db'} title={"Notification"}
                                       onPress={() => console.log("Notification")}>
                        <Icon name={"md-notifications-outline"} style={styles.actionButtonIcon}/>
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
