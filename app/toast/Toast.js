import React, {Component} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View, ViewPropTypes as RNViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

const ViewPropTypes = RNViewPropTypes || View.propTypes;
export const DURATION = {
    LENGTH_SHORT: 500,
    FOREVER: 0,
    LENGTH_LONG: 1000
};

const {height, width} = Dimensions.get('window');

export default class EasyToast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            message: '',
            opacityValue: new Animated.Value(this.props.opacity)
        }
    }
    //Function show a toast width message, unit is millisecond, and do callback
    showToast(message, duration, callback) {
        this.duration = typeof duration === 'number' ? duration : DURATION.LENGTH_SHORT;
        this.callback = callback;
        this.setState({
            isShow: true,
            message: message
        });
        Animated.timing(
            this.state.opacityValue,
            {
                toValue: this.props.opacity,
                duration: this.props.fadeInDuration
            }
        ).start(() => {
            this.isShow = true;
            if (duration !== DURATION.FOREVER) {
                this.closeToast();
            }
        });
    };
    //Auto start close toast
    closeToast(duration) {
        let delay = typeof duration === 'undefined' ? this.duration : duration;
        if (delay === DURATION.FOREVER) delay = this.props.defaultCloseDelay || 250;

        if (!this.isShow && !this.state.isShow) return;
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            Animated.timing(
                this.state.opacityValue,
                {
                    toValue: 0.0,
                    duration: this.props.fadeOutDuration,
                }
            ).start(() => {
                this.setState({
                    isShow: false
                });
                this.isShow = false;
                if (typeof this.callback === 'function') {
                    this.callback();
                }
            });
        }, delay);
    }

    //Will clear all timer when component un mount
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        let pos;
        switch (this.props.position) {
            case 'top':
                pos = this.props.positionValue;
                break;
            case 'center':
                pos = height / 2;
                break;
            case 'bottom':
                pos = height - this.props.positionValue;
                break;
        }
        const view = this.state.isShow ?
            <View
                style={[styles.container, {top: pos}]}
                pointerEvents="none"
            >
                <Animated.View
                    style={[styles.content, {opacity: this.state.opacityValue}, this.props.style]}
                >
                    {React.isValidElement(this.state.message) ? this.state.message :
                        <Text style={this.props.textStyle}>{this.state.message}</Text>}
                </Animated.View>
            </View> : null;
        return view;
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        elevation: 999,
        alignItems: 'center',
        zIndex: 10000,
    },
    content: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
    },
    text: {
        color: 'white'
    }
});
EasyToast.propTypes = {
    style: ViewPropTypes.style,
    position: PropTypes.oneOf([
        'top',
        'center',
        'bottom',
    ]),
    textStyle: Text.propTypes.style,
    positionValue: PropTypes.number,
    fadeInDuration: PropTypes.number,
    fadeOutDuration: PropTypes.number,
    opacity: PropTypes.number
};

EasyToast.defaultProps = {
    position: 'bottom',
    textStyle: styles.text,
    positionValue: 150,
    fadeInDuration: 500,
    fadeOutDuration: 500,
    opacity: 1
};