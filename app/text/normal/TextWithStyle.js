import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class NormalText extends Component {
    static navigationOptions = {
        title: "Text with styling",
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>This is an normal text without styling</Text>
                <Text style={styles.textStyle1}>This is an normal text without styling</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        color: 'red',
        fontSize: 20
    },
    textStyle1: {
        fontSize: 25,
        textAlign: 'center'
    }
});
