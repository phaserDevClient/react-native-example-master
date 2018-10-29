import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TimeWidget from './TimeWidget';
import Modal from "react-native-modal";

export default class FlightCard extends Component {
    state = {
        isModalVisible: false
    };
    _toggleModal = () =>
        this.setState({isModalVisible: !this.state.isModalVisible});

    renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    renderModalContent = () => (
        <View style={styles.modalContent}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: "center",
                padding: 20
            }}>
                <Image style={{
                    height: 50,
                    width: 50,
                    marginRight: 10
                }} source={{uri: this.props.data.values.imgUrl}}/>
                <TimeWidget data={this.props.data.values}/>
                <Text style={styles.finalPriceText}>{this.props.data.values.cost}</Text>
            </View>
            {/*<View>*/}
            {/*{this.renderButton("Close modal", () => this.setState({isModalVisible: !this.state.isModalVisible}))}*/}
            {/*</View>*/}
        </View>
    );

    render() {
        return (
            <View style={styles.outerContainer}>
                <TouchableOpacity onPress={this._toggleModal} style={styles.outerContainer}>
                    <View style={styles.outerContainer}>
                        <View style={styles.container}>
                            <Image style={styles.image} source={{uri: this.props.data.values.imgUrl}}/>
                            <TimeWidget data={this.props.data.values}/>
                            <Text style={styles.finalPriceText}>{this.props.data.values.cost}</Text>
                        </View>
                        <View style={styles.line}/>
                    </View>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible}
                       onBackdropPress={() => {
                           this.setState({isModalVisible: !this.state.isModalVisible})
                       }}>
                    {this.renderModalContent()}
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "white",
        alignItems: "center",
        padding: 16
    },
    finalPriceText: {
        marginLeft: 16,
        color: 'blue',
        fontSize: 16,
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 16,
    },
    line: {
        height: 1.5,
        backgroundColor: "#d3d3d3"
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCenter: {
        height: 300,
        width: 300
    },
    text: {
        color: "black",
        fontSize: 22
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
        height: 100
    },
});
