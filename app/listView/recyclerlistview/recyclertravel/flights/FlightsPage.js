import React, {Component} from "react";
import {DataProvider, LayoutProvider, RecyclerListView} from "recyclerlistview";
import {Alert, Button, Dimensions, StyleSheet, Text, View} from "react-native";
import FlightCard from "./FlightCard";
import FlightData from "./FlightData";
import HotelCard from "./HotelCard";
import TopWidget from "./TopWidget";
import Modal from 'react-native-modalbox';

let {height, width} = Dimensions.get('window');
export default class FlightsPage extends Component {
    constructor(args) {
        super(args);
        this.state = {
            dataProvider: new DataProvider((r1, r2) => {
                return r1 !== r2
            }).cloneWithRows(FlightData)
        };
        this._layoutProvider = new LayoutProvider((i) => {
            return this.state.dataProvider.getDataForIndex(i).type;
        }, (type, dim) => {
            switch (type) {
                case "HOTEL_ITEM":
                    dim.width = width;
                    dim.height = 83;
                    break;
                case "FL_ITEM":
                    dim.width = width;
                    dim.height = 80;
                    break;
                case "HEADER":
                    dim.width = width;
                    dim.height = 300;
                    break;
                default:
                    dim.width = width;
                    dim.height = 0;

            }
        });
        this._renderRow = this._renderRow.bind(this);
    }

    _renderRow(type, data) {
        switch (type) {
            case "HOTEL_ITEM":
                return <HotelCard/>;
            case "FL_ITEM":
                return <FlightCard data={data}/>;
            case "HEADER":
                return <TopWidget data={data}/>;
            default:
                return null;

        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Travel Mate</Text>
                </View>
                <Button title={"Open Modal"} onPress={() => this.refs.modalCenter1.open()}/>
                <RecyclerListView rowRenderer={this._renderRow} dataProvider={this.state.dataProvider}
                                  layoutProvider={this._layoutProvider}/>
                <Modal style={[styles.modal, styles.modalCenter]}
                       position={'center'}
                       ref={'modalCenter1'}
                       isDisable={false}>
                    <Text style={styles.text}>
                        Modal center
                    </Text>
                    <Button onPress={() => {
                        Alert.alert("Close modal")
                    }} title={""}/>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        height: 65,
        backgroundColor: 'orange',
        alignItems: "center",
        flexDirection: "row",
        elevation: 4
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 16,
        paddingBottom: 3
    },
    backIcon: {
        height: 23,
        width: 23,
        marginLeft: 16

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
    }

});
