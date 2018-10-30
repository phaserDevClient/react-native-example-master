import React, {Component} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class TabListViewHome extends Component {
    static navigationOptions = {
        headerTitle: "Tab Navigation"
    };

    _onPressButton(item) {
        if (this.props.navigation.navigate(item.key)) {
            this.props.navigation.navigate(item.key);
        } else {
            alert("Opp! Don't have this route name");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        data={[
                            {
                                key: 'TabBottom',
                                value: 'Tab Bottom'
                            },
                            {
                                key: 'TabHeader',
                                value: 'Tab Header'
                            }
                        ]}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.buttonContainer}
                                              onPress={() => this._onPressButton(item)}>
                                <Text style={styles.buttonText}>{item.value}</Text>
                            </TouchableOpacity>
                        )}/>
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
        backgroundColor: '#01c425',
        paddingVertical: 15,
        borderWidth: 0.5,
        borderColor: 'white'
    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "700",
        color: 'white'
    },
});
