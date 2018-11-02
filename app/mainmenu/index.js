import React, {Component} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {key: 'Text', info: 'Text Example'},
                {key: 'ListView', info: 'List View Example'},
                {key: 'VideoComponent', info: 'Video Example'},
                {key: 'AutoCompleteTextInput', info: 'Auto Complete Text'},
                {key: 'NavigationDrawer', info: 'Navigation Drawer'},
                {key: 'TabNavigation', info: 'Tab Navigation'},
                {key: 'FAB', info: 'Floating Button Action'},
                {key: 'Toast', info: 'Simple Toast'},
                {key: 'TableView', info: 'Table View'}
                // {key: 'Image', info: 'Text info'},
                // {key: 'Networking', info: 'Text info'},
                // {key: 'Timer', info: 'Text info'},
            ],
            itemClicked: ''
        };

    }

    static navigationOptions = {
        title: 'Home',
    };

    componentDidMount() {
        // console.log(this.props.navigation.state);
        // console.log(this.state)
    }

    _onPressButton(item) {
        if (this.props.navigation.navigate(item.key)) {
            this.props.navigation.navigate(item.key);
        } else {
            alert("Opp!!!!! Please don't");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center', fontSize: 25, fontWeight: fontWeight.Medium}}>This is demo about
                    react-native</Text>
                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.buttonContainer}
                            >
                                <Text style={styles.buttonText}
                                      onPress={() => this._onPressButton(item)}>{item.info}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}

const fontWeight = {
    Thin: "100",
    UltraLight: "200",
    Light: "300",
    Regular: "400",
    Medium: "500",
    Semibold: "600",
    Bold: "700",
    Heavy: "800",
    Black: "900"
};

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
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        borderWidth: 0.5,
        borderColor: '#fff'
    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: fontWeight.Semibold
    },
});
