import React, {Component} from 'react';
import {View,SwipeableFlatList} from 'react-native';
const listData = [{key: 1, value: 'example1'}, {key: 2, value: 'example2'}, {key: 3, value: 'example3'}];

export default class SwipeableFlastList extends Component{
    constructor(props){
        super(props);
        this.renderSeparator = this.renderSeparator.bind(this);
        this.success = this.success.bind(this);
        this.setScrollEnabled = this.setScrollEnabled.bind(this);
    }
}
