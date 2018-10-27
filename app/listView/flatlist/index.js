import React, {Component} from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class ListViewHome extends Component {
    static navigationOptions = {
        headerTitle: "ListView",
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
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
                        data={[{key: 'FlatList', data: 'Normal FlatList'}, {
                            key: 'SwipeableFlatList',
                            data: 'Swipeable FlatList'
                        }]}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.buttonContainer}
                                              onPress={() => this._onPressButton(item)}>
                                <Text style={styles.buttonText}>{item.data}</Text>
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
        paddingVertical: 15
    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
});
