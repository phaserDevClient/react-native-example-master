import React, {Component} from 'react';
import {View} from 'react-native';
import VideoComponent from './Component';

export default class VideoComponents extends Component<Props> {
    render() {
        return (
            <View>
                <VideoComponent/>
            </View>
        );
    }
}
