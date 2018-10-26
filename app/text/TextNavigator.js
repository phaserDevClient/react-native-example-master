import React from 'react';
import {createSwitchNavigator} from 'react-navigation';

import NormalText from '../text/normal/NormalText';
import TextStyling from '../text/normal/TextWithStyle';

const navigator = createSwitchNavigator({
    TextNormal: {screen: NormalText},
    TextStyling: {screen: TextStyling}
});
export default navigator;
