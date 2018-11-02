import React, {Component} from 'react';
import {MapView} from 'expo';

export default class MapViews extends Component {
    render() {
        return (
            <MapView
            style={{flex: 1}}
            initialRegion={{
                latitude: 21.00313693,
                longitude: 105.80197822,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}/>
        );
    }
}
