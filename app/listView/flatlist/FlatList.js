import React, {Component} from 'react';
import {ActivityIndicator, Button, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const dimen = Dimensions.get('window');
export default class FlatLists extends Component {
    static navigationOptions = {
        headerTitle: "Flast list"
    };
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            offset: 0,
            limit: 100,
            isLoading: true
        }
    }

    componentDidMount() {
        return this.GetListAirCraftFromApi();
    }

    async GetListAirCraftFromApi() {
        try {
            let response = await fetch('https://iatacodes.org/api/v6/aircrafts?api_key=74365e08-1a3d-4ab8-a827-732289a8df2b');
            let responseJon = await response.json();
            this.setState({isLoading: false, list: responseJon.response})
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}
                >
                    <ActivityIndicator/>
                </View>
            );
        }
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>This is an demo of flat list react-native</Text>
                    </View>
                    <View>
                        {/*<FlatList*/}
                        {/*data={[*/}
                        {/*{key: 'Devin'},*/}
                        {/*{key: 'Jackson'},*/}
                        {/*{key: 'James'},*/}
                        {/*{key: 'Joel'},*/}
                        {/*{key: 'John'},*/}
                        {/*{key: 'Jillian'},*/}
                        {/*{key: 'Jimmy'},*/}
                        {/*{key: 'Julie'},*/}
                        {/*{key: 'Julie1'},*/}
                        {/*{key: 'Julie2'},*/}
                        {/*{key: 'Julie3'},*/}
                        {/*{key: 'Julie4'},*/}
                        {/*{key: 'Julie5'},*/}
                        {/*{key: 'Julie6'},*/}
                        {/*{key: 'Julie7'},*/}
                        {/*{key: 'Julie8'},*/}
                        {/*{key: 'Julie9'},*/}
                        {/*{key: 'Julie10'},*/}
                        {/*]}*/}
                        {/*renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}*/}
                        {/*/>*/}
                        <FlatList
                            data={this.state.list}
                            renderItem={({item}) => <Text style={styles.item}
                            >{item.code}</Text>}
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff'
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
        borderWidth: 1,
        borderColor: '#fff'
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 25
    }
});
