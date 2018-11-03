import React, {Component} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

let width = Dimensions.get('window').width;
export default class InputModelExample extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textHeader}>Input model example with scrollview</Text>
                <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                    <TextInput style={styles.textInput} placeholder={'Input your name'}>
                    </TextInput>
                    <TextInput style={styles.textInput} placeholder={'Input your password'} secureTextEntry={true}/>
                    <TextInput style={styles.textInput} placeholder={'Input your address'}/>
                    <TextInput keyboardType={'email-address'} style={styles.textInput}
                               placeholder={'Input your email'}/>
                </ScrollView>
                {/*<View style={styles.buttonContainer}>*/}
                    {/*<TouchableOpacity style={styles.buttonAdd}>*/}
                        {/*<Text>Add</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity style={styles.buttonClear}>*/}
                        {/*<Text>Clear</Text>*/}
                    {/*</TouchableOpacity>*/}
                {/*</View>*/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    scrollView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainerStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 20,
        marginTop: 20
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: width - 20,
        marginBottom: 10
    },
    buttonContainer: {
        position: 1,
        flexDirection: 'row',
        padding: 150,
        marginBottom: 20,
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonAdd: {
        backgroundColor: '#50dd7a',
        marginRight: 10,
        height: 50,
        width: 50
    },
    buttonClear: {
        backgroundColor: '#dd7e87',
        width: 50,
    }
});
