import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Detail Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DetailScreen;
