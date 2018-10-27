import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class NormalText extends Component {
    static navigationOptions = {
        title: "Text with styling",
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>This is a text with color</Text>
                <Text style={styles.textAligns}>This is a text with font size and align center</Text>
                <Text style={styles.text_align_left}>This is a text with font size and align center</Text>
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
        fontSize: 20,
        marginBottom: 10
    },
    textAligns: {
        fontSize: 25,
        textAlign: 'center'
    },
    text_align_left: {
        fontSize: 20,
        textAlign: 'left',
        marginTop: 10
    }
});
