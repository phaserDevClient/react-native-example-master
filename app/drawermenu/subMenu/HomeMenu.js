import React, {Component} from 'react';
import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';
// import {Badge} from 'react-native-elements';

export default class HomeMenu extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../../assets/chat.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    renderBadge() {
        return (
            <View style={styles.badgeIconView}>
                <Image source={require('../../assets/speech-bubble.png')}/>
                <Text style={styles.badge} onPress={() => {
                    Alert.alert("Notification press")
                }}>2</Text>

            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>
                    This is home menu
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Notification')}
                    title="Go to notifications"
                />
                <View>
                    <View style={styles.badgeIconView}>
                        <Image source={require('../../assets/speech-bubble.png')}/>
                        <Text style={styles.badge} onPress={() => {
                            Alert.alert("Notification press")
                        }}>2</Text>

                    </View>
                </View>
                {/*<Badge*/}
                {/*value={3}*/}
                {/*textStyle={{color: 'white'}}*/}
                {/*containerStyle={{backgroundColor: 'red', zIndex: 10}}*/}
                {/*onPress={() => {*/}
                {/*Alert.alert("press badge")*/}
                {/*}}/>*/}
                {/*<Badge containerStyle={{backgroundColor: 'violet'}}>*/}
                {/*<Text>User 1</Text>*/}
                {/*</Badge>*/}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        fontSize: 28,
        color: '#0076ff',
        fontWeight: '700'
    },
    badgeIconView: {
        position: 'relative',
        padding: 5
    },
    badge: {
        color: '#fff',
        position: 'absolute',
        zIndex: 10,
        top: 0.5,
        right: 1.5,
        overflow: 'hidden',
        backgroundColor: 'red',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        textAlign: 'center'
    }
});
