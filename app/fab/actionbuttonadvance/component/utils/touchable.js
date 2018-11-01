import {Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import {shadeColor} from "./color";
import {isAndroid} from "./platform";

export function getTouchableComponent(useNativeFeedback = true) {
    if (useNativeFeedback === true && isAndroid === true) {
        return TouchableNativeFeedback;
    }
    return TouchableOpacity;
}

export function getRippleColor(color, useNativeFeedback = true) {
// less than API 21 don't support Ripple
    if (useNativeFeedback === true && isAndroid === true && Platform.Version >= 21) {
        return {
            background: TouchableNativeFeedback.Ripple(shadeColor(color, -30), true)
        };
    }
    return {};
}
