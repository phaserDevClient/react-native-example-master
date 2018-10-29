import React, {Component} from 'react';
import {Video} from 'expo';
import {Dimensions, StyleSheet, View, WebView} from 'react-native';
import VideoPlayer from '@expo/videoplayer';

const windowWidth = Dimensions.get('window');
export default class VideoComponent extends Component {
    renderVideo() {
        return (
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
        );
    }

    // renderYouTubeVideo() {
    //     return (
    //         <YouTube
    //             videoId="M-P4QBt-FWw"   // The YouTube video ID
    //             play={true}             // control playback of video with true/false
    //             fullscreen={true}       // control whether the video should play in fullscreen or inline
    //             loop={true}
    //         />
    //     );
    // }

    renderYouTubeVideo() {
        return (
            <WebView
                style={styles.videoContainer}
                javaScriptEnabled={true}
                allowsInlineMediaPlayback={true}
                originWhitelist={['*']}
                // source={{
                //     uri: 'https://www.youtube.com/embed/cBVGlBWQzuc?autoplay=1'
                // }}
                source={{
                    html: "<html><body><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Nf3qjMc5cXw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></body></html>"
                }}
            />
        );
    }

    renderExpoVideoPlayer() {
        return (
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_COVER,
                    source: {
                        uri: "https://youtu.be/Nf3qjMc5cXw"
                    }
                }}
                isPortrait={true}

            />
        );
    }

    render() {
        return (
            <View>
                <View>
                    {this.renderVideo()}
                </View>
                <View>
                    {this.renderYouTubeVideo()}
                </View>
                {/*<View style={styles.expoVideoContainer}>*/}
                {/*{this.renderExpoVideoPlayer()}*/}
                {/*</View>*/}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
        width: windowWidth.width,
        height: 300,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
    },
    videoContainer: {
        paddingTop: 315,
        top: 315,
        backgroundColor: '#ecf0f1',
    },
    expoVideoContainer: {
        top: 315,
        backgroundColor: '#ecf0f1',
    }
});
