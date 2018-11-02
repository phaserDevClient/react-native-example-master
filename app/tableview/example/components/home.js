import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class TableViewHome extends Component {
    static navigationOptions = {
        title: 'Table View Home'
    };

    onButtonPress(route) {
        this.props.navigation.navigate(route);
        console.log(route);
    }

    render() {
        const routes = [
            'ExampleOne',
            'ExampleTwo',
            'ExampleThree',
            'ExampleFour',
            'ExampleFive'
        ];
        return (
            <View style={styles.container}>
                {
                    routes.map((route, index) => (
                        <TouchableOpacity key={index} style={styles.button}
                                          onPress={() => this.onButtonPress(route)}>
                            <Text style={styles.text}>Go to {route}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button: {
        width: 280,
        height: 42,
        backgroundColor: '#44d041',
        borderRadius: 4,
        justifyContent: 'center',
        paddingLeft: 16,
        marginBottom: 16
    },
    text: {
        color: '#fff',
        fontWeight: '100',
        fontSize: 16
    }
});
