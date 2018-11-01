import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

export default class AddIcon extends Component {
    render() {
        const {width, height} = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.vertical, {height}]}/>
                <View style={[styles.horizontal, {width}]}/>
            </View>
        );
    }
}

AddIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    vertical: {
        width: 2,
        position: 'absolute',
        backgroundColor: '#fff'
    },
    horizontal: {
        height: 2,
        position: 'absolute',
        backgroundColor: '#fff'
    }
});
