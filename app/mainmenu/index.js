import React, {Component} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {key: 'Text', info: 'Text info'},
                {key: 'ListView', info: 'Text info'},
                {key: 'ScrollView', info: 'Text info'},
                {key: 'Button', info: 'Text info'},
                {key: 'Navigator', info: 'Text info'},
                {key: 'Image', info: 'Text info'},
                {key: 'Networking', info: 'Text info'},
                {key: 'Timer', info: 'Text info'},
            ],
            itemClicked: ''
        };

    }

    static navigationOptions = {
        title: 'Home',
    };

    componentDidMount() {
        // console.log(this.props.navigation.state);
        // console.log(this.state)
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center', fontSize: 25}}>This is demo about react-native</Text>
                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.buttonContainer}
                            >
                                <Text style={styles.buttonText} onPress={() => {
                                    if (this.props.navigation.navigate(item.key)) {
                                        this.props.navigation.navigate(item.key);
                                    } else {
                                        alert("No keys");
                                    }
                                }}>{item.key}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        fontSize: 18,
        height: 44,
        padding: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
});
