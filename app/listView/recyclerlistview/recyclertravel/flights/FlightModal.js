import React, {Component} from 'react';
import {Alert, Modal, StyleSheet, View} from 'react-native';

export default class FlightModal extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisiable(visable) {
        this.setState({modalVisible: visable});
    };

    render() {
        return (
            <View style={styles.container}>
                <Modal animationType={'slide'}
                       transparent={false}
                       visible={this.state.modalVisible}
                       onRequestClose={() => {
                           Alert.alert('Modal has been close!');
                       }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 22
    }
});
