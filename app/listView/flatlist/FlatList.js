import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';
const dimen = Dimensions.get('window');
export default class FlatLists extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textTitle}>This is an demo of flat list react-native</Text>
                </View>
                <View>
                    <FlatList
                        data={[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                            {key: 'Julie1'},
                            {key: 'Julie2'},
                            {key: 'Julie3'},
                            {key: 'Julie4'},
                            {key: 'Julie5'},
                            {key: 'Julie6'},
                            {key: 'Julie7'},
                            {key: 'Julie8'},
                            {key: 'Julie9'},
                            {key: 'Julie10'},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    item: {
        paddingTop: 10,
        alignItems: 'center',
        fontSize: 18,
        backgroundColor: '#55ff61',
        width: dimen.width,
        height: 50,
        textAlign: 'center',
        borderBottomColor: '#000000',
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 25
    }
});
