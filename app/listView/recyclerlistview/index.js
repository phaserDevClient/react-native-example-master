import React, {Component} from 'react'
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class RecyclerListViewHome extends Component {
    static navigationOptions = {
        headerTitle: "ListView",
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
                                key: 'RecylerListView',
                                data: 'Recycler'
                            },
                            {
                                key: 'RecyclerListViewData',
                                data: 'ListData'
                            }]}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.buttonContainer}
                                              onPress={() => this._onPressButton(item)}>
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

// import {BorderlessButton} from 'react-native-gesture-handler';
// import {createNavigationContainer, createNavigator, SafeAreaView, TabRouter} from 'react-navigation';
// import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
// import SampleText from '../../config/SampleText';
// import SampleView from '../../config/SampleView';

// const MyNavScreen = ({navigation, banner, view}) => (
//     <ScrollView>
//         <SafeAreaView forceInset={{horizontal: 'always'}}>
//             <SampleText>{banner}</SampleText>
//             {/*<Button*/}
//             {/*onPress={() => {*/}
//             {/*navigation.goBack(null);*/}
//             {/*}}*/}
//             {/*title="Go back"*/}
//             {/*/>*/}
//             <SampleView>{view}</SampleView>
//         </SafeAreaView>
//         <StatusBar barStyle="default"/>
//     </ScrollView>
// );
//
// const MyRecyclerBasic = ({navigation}) => (
//     <MyNavScreen navigation={navigation} banner="RecyclerListView" view={RecyclerListView}/>
// );
// const MyRecyclerWithData = ({navigation}) => (
//     <MyNavScreen navigation={navigation} banner="RecyclerListViewData" view={RecyclerListViewData}/>
// );
// const CustomTabBar = ({navigation}) => {
//     const {routes} = navigation.state;
//     return (
//         <SafeAreaView style={styles.tabContainer}>
//             {routes.map(route => (
//                 <BorderlessButton
//                     onPress={() => navigation.navigate(route.routeName)}
//                     style={styles.tab}
//                     key={route.routeName}
//                 >
//                     <Text>{route.routeName}</Text>
//                 </BorderlessButton>
//             ))}
//         </SafeAreaView>
//     );
// };
// const CustomTabView = ({descriptors, navigation}) => {
//     const {routes, index} = navigation.state;
//     const descriptor = descriptors[routes[index].key];
//     const ActiveScreen = descriptor.getComponent();
//     return (
//         <SafeAreaView forceInset={{top: 'always'}}>
//             <CustomTabBar navigation={navigation}/>
//             <ActiveScreen navigation={descriptor.navigation}/>
//         </SafeAreaView>
//     );
// };
// const CustomTabRouter = TabRouter(
//     {
//         RecyclerListView: {
//             screen: MyRecyclerBasic,
//             path: '',
//         },
//         RecyclerListViewData: {
//             screen: MyRecyclerWithData,
//             path: 'RecyclerListViewData',
//         }
//     },
//     {
//         // Change this to start on a different tab
//         initialRouteName: 'RecyclerListView',
//     }
// );
// const CustomTabs = createNavigationContainer(
//     createNavigator(CustomTabView, CustomTabRouter, {})
// );
//
// export default CustomTabs;
// const styles = StyleSheet.create({
//     tabContainer: {
//         flexDirection: 'row',
//         height: 48,
//     },
//     tab: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         margin: 4,
//         borderWidth: 1,
//         borderColor: '#ddd',
//         backgroundColor: '#0aff2d',
//         borderRadius: 4,
//     },
// });
