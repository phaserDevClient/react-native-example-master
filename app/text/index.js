import React, {Component} from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class TextHome extends Component {
    static navigationOptions = {
        headerTitle: "Text",
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        data={[{key: 'TextNormal', data: 'Text without styling'}, {key: 'TextStyling', data: 'Text with styling'}]}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.buttonContainer}
                                              onPress={() => {
                                                  if (this.props.navigation.navigate(item.key))
                                                      this.props.navigation.navigate(item.key);
                                                  else
                                                      alert('Wrong place');
                                              }}>
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
