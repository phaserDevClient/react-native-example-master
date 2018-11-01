// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import ActionButton from './actionbutton/ActionButton';
//
// export default class FABButton extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>
//                     Basic FAB Example
//                 </Text>
//                 <ActionButton buttonColor={"rgba(231,76,60,1)"}>
//                     <ActionButton.Item buttonColor={"#9b59b6"} title={"New Task"} onPress={() => {
//                         console.log("Note tapped!");
//                     }}>
//                         <Icon name={"me-create"} style={styles.actionButtonIcon}/>
//                     </ActionButton.Item>
//                     <ActionButton.Item buttonColor={'#3498db'} title={"Notification"}
//                                        onPress={() => console.log("Notification")}>
//                         <Icon name={"me-notification-off"} style={styles.actionButtonIcon}/>
//                     </ActionButton.Item>
//                     <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {
//                     }}>
//                         <Icon name="md-done-all" style={styles.actionButtonIcon}/>
//                     </ActionButton.Item>
//                 </ActionButton>
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF'
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10
//     },
//     actionButtonIcon: {
//         fontSize: 20,
//         height: 22,
//         color: 'white',
//     }
// });

import React, {Component} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class FloatingButton extends Component {
    static navigationOptions = {
        headerTitle: "Floating button",
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
                                key: 'Basic',
                                value: 'Basic'
                            },
                            {
                                key: 'Circle',
                                value: 'Circle'
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
