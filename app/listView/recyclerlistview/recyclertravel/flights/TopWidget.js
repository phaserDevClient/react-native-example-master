import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
export default class TopWidget extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageFlag} source={{uri: this.props.data.values.fromImage}}/>
                <View style={styles.line}/>
                <Image style={styles.imageFlag} source={{uri: this.props.data.values.toImage}}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'orange'

    },
    line: {
        height: 2,
        width: 300,
        backgroundColor: "white"
    },
    imageFlag: {
        width: 150,
        height: 150
    },

});
