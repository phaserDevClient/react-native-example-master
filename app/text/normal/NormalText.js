import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class NormalText extends Component {
    static navigationOptions = {
        title: 'Text without styling'
    };

    render() {
        return (
            <View>
                <Text>This is an normal text without styling</Text>
            </View>
        );
    }
}
