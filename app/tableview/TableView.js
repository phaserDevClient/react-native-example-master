import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class TableView extends Component {
    renderRow(row) {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                padding: 10
            }}>{
                row.map((column) => {
                    return (this.renderColumn(column));
                })
            }
            </View>
        );
    };

    renderColumn(column) {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {
                    column.map((item) => {
                        return (
                            <View style={{
                                flex: 1,
                                flexDirection: 'row'
                            }}>
                                <Text style={{flex: 1, alignSelf: 'center'}} size={16}>
                                    {item}
                                </Text>
                            </View>
                        );
                    })
                }
            </View>
        );
    }

    render() {
        const data = this.props.dataSource;
        return (
            <View style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {
                    data.map((row) => {
                        return this.renderRow(row);
                    })
                }
            </View>
        )
    }
}
