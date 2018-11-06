import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Swipers extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper} showsPagination={false} loop={false}>
                <View style={styles.slide1}>
                    {/*<Text style={styles.text}>Hello Swiper</Text>*/}
                    <Image style={styles.image} resizeMode="contain" source={require('../../assets/images/3.png')}/>
                </View>
                <View style={styles.slide2}>
                    {/*<Text style={styles.text}>Beautiful</Text>*/}
                    <Image style={styles.image} resizeMode="contain" source={require('../../assets/images/2.png')}/>
                </View>
                <View style={styles.slide3}>
                    {/*<Text style={styles.text}>And simple</Text>*/}
                    <Image style={styles.image} resizeMode="contain" source={require('../../assets/images/1.png')}/>
                </View>
                <View style={styles.slide3}>
                    {/*<Text style={styles.text}>And simple</Text>*/}
                    <Image style={styles.image} resizeMode="contain" source={require('../../assets/images/4.png')}/>
                </View>
                <View style={styles.slide3}>
                    {/*<Text style={styles.text}>And simple</Text>*/}
                    <Image style={styles.image} resizeMode="contain" source={require('../../assets/images/5.png')}/>
                </View>
                <View style={styles.slide3}>
                    {/*<Text style={styles.text}>And simple</Text>*/}
                    <Image style={styles.image} resizeMode="contain" source={require('../../assets/images/6.png')}/>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        width: null,
        height: null
    }
});

