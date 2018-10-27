import React from 'react';
import {createStackNavigator} from 'react-navigation';

import NormalText from '../text/normal/NormalText';
import TextStyling from '../text/normal/TextWithStyle';

const navigator = createStackNavigator({
    TextNormal: {
        screen: NormalText,
        navigationOptions: {
            title: 'Text',
            header: null,
            headerRight: "headerRight"
        }
    },
    TextStyling: {
        screen: TextStyling,
        navigationOptions: {
            header: null
        }
    }
});
export default navigator;
