// import React, {Component} from 'react';
// import {Animated, Dimensions, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
//
// let windowWidth = Dimensions.get('window').width;
// let windowHeight = Dimensions.get('window').height;
//
// export default class SimpleToast extends Component {
//     constructor(props) {
//         super(props);
//         this.animatedValue = new Animated.Value(0);
//         this.animatedXValue = new Animated.Value(-windowWidth);
//         this.state = {
//             modalShown: false,
//             toastColor: 'green',
//             message: 'Success!'
//         }
//     }
//
//     callToast(message, type) {
//         if (this.state.modalShown) return;
//         this.setToastType(message, type);
//         this.setState({modalShown: true});
//         Animated.timing(
//             this.animatedValue,
//             {
//                 toValue: 1,
//                 duration: 350
//             }).start(this.closeToast())
//     }
//
//     closeToast() {
//         setTimeout(() => {
//             this.setState({modalShown: false});
//             Animated.timing(
//                 this.animatedValue,
//                 {
//                     toValue: 0,
//                     duration: 350
//                 }).start()
//         }, 2000)
//     }
//
//     callXToast(message, type) {
//         console.log(message + " - " + type);
//         if (this.state.modalShown) return;
//         this.setToastType(message, type);
//         this.setState({modalShown: true});
//         Animated.timing(
//             (this.animatedXValue),
//             {
//                 toValue: 0,
//                 duration: 350
//             }).start(this.closeXToast())
//     }
//
//     closeXToast() {
//         setTimeout(() => {
//             this.setState({modalShown: false});
//             Animated.timing(
//                 this.animatedXValue,
//                 {
//                     toValue: -windowWidth,
//                     duration: 350
//                 }).start()
//         }, 2000)
//     }
//
//     setToastType(message = 'Success!', type = 'success') {
//         let color;
//         if (type == 'error') color = 'red';
//         if (type == 'primary') color = '#2487DB';
//         if (type == 'warning') color = '#ec971f';
//         if (type == 'success') color = 'green';
//         if (type == 'bottom') color = 'purple';
//         this.setState({toastColor: color, message: message})
//     }
//
//     render() {
//
//         let animation = this.animatedValue.interpolate({
//             inputRange: [0, .3, 1],
//             outputRange: [-70, -10, 0]
//         });
//
//         return (
//             <View>
//                 <View style={styles.container}>
//                     {/*<Button type="success" callToast={() => this.callToast('YOYOYO')}/>*/}
//                     {/*<Button type="error" callToast={() => this.callToast('Error toast called!', 'error')}*/}
//                     {/*title="Something went wrong..."/>*/}
//                     {/*<Button type="warning" callToast={() => this.callToast('Warning toast called!', 'warning')}/>*/}
//                     {/*<Button type="primary" callToast={() => this.callToast('Primary toast called!', 'primary')}/>*/}
//                     <Button type="bottom" callToast={() => this.callXToast("Success", 'bottom')}/>
//                 </View>
//
//                 <Animated.View style={{
//                     transform: [{translateY: animation}],
//                     height: 70,
//                     backgroundColor: this.state.toastColor,
//                     position: 'absolute',
//                     left: 0,
//                     top: 0,
//                     right: 0,
//                     justifyContent: 'center'
//                 }}>
//                     <Text style={{marginLeft: 10, color: 'white', fontSize: 16, fontWeight: 'bold'}}>
//                         {this.state.message}
//                     </Text>
//                 </Animated.View>
//
//                 <Animated.View style={{
//                     transform: [{translateX: this.animatedXValue}],
//                     height: 70,
//                     marginTop: windowHeight - 70,
//                     backgroundColor: 'green',
//                     position: 'absolute',
//                     left: 0,
//                     top: 0,
//                     width: windowWidth,
//                     justifyContent: 'center'
//                 }}>
//                     <Text style={{
//                         marginLeft: 10,
//                         color: 'white',
//                         fontSize: 16,
//                         fontWeight: 'bold',
//                         textAlign: 'center'
//                     }}>Success!</Text>
//                 </Animated.View>
//
//             </View>
//         );
//     }
// }
//
// class Button extends Component {
//     render() {
//         let {callToast, type} = this.props;
//         return (
//             <View style={styles.buttonContainer}>
//                 <TouchableHighlight onPress={callToast} underlayColor={"#ddd"}
//                                     style={{
//                                         height: 60,
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                         backgroundColor: '#ededed',
//                                         borderWidth: 1,
//                                         borderColor: '#ddd',
//                                         display: 'block',
//                                         marginBottom: 5
//                                     }}>
//                     <Text>Call {type} toast.</Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 70
//     },
//     buttonContainer: {
//         marginTop: 10
//     }
// });
//
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Toast from './Toast';

export default class SimpleToast extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{padding: 10}}
                                  onPress={() => {
                                        this.refs.toast.showToast('Hello world');
                                    }}>
                    <Text>Press me!!!</Text>
                </TouchableOpacity>
                /*Toast normal*/
                {/*<Toast ref={"toast"}*/}
                       {/*style={{backgroundColor: '#2487DB'}}/>*/}

                       /*Toast custom*/
                <Toast
                    ref="toast"
                    style={{backgroundColor:'red'}}
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'white'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
