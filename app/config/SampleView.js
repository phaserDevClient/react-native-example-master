/**
 * Used across examples as a screen placeholder.
 */
import type {ChildrenArray} from 'react';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

const SampleViews = ({children}: { children?: ChildrenArray<*> }) => (
    <View style={styles.sampleView}>{children}</View>
);
export default class SampleView extends Component {

    render() {
        return (
            <SampleViews/>
        );
    }
}
const styles = StyleSheet.create({
    sampleView: {
        flex: 1
    },
});
