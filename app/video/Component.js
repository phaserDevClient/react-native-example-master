import React, {Component} from 'react';
import {Video} from 'expo';
import {StyleSheet, View} from 'react-native';

export default class VideoComponent extends Component {
    render() {
        return (
            <View>
                <Video
                    source={require('../assets/videotest.mp4')}
                    // source={{uri:'https://www.youtube.com/watch?v=M-P4QBt-FWw'}}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    shouldPlay
                    isLooping
                    style={styles.backgroundVideo}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
        width: 300,
        height: 300,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
    },
});
