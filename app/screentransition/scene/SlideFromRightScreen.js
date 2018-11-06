import React, {Component} from 'react'

import {StyleSheet, Text, TouchableOpacity, View,} from 'react-native'

class SlideFromRightScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Slide From Right Screen',
            headerStyle: {
                backgroundColor: '#2980b9',
                height: 60,
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerBackTitleStyle: {
                color: 'white'
            }
        }

    };
    moveToSlideFromRight = () => {
        this.props.navigation.navigate('SlideFromRight2');
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.moveToSlideFromRight}><Text style={styles.textButton}>SLIDE FROM RIGHT
                    SCREEN</Text></TouchableOpacity>
                <Text onPress={() => {
                    this.props.navigation.goBack()
                }} style={styles.textButton}>SCREEN</Text>
            </View>
        )
    }
}

export default SlideFromRightScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#c0392b'
    },
    textButton: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        padding: 15
    }
})
