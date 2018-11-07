import React, {Component} from 'react';
import {Alert, Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={[{marginTop: 22}, styles.container]}>
                <Modal animationType={"slide"}
                       transparent={true}
                       visible={this.state.modalVisible}
                       onRequestClose={() => {
                           Alert.alert("Modal has been closed");
                       }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 300,
                            height: 300,
                            backgroundColor: "#87ff6f",
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text>Hello world!</Text>
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
