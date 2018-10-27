import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

export default class SectionLists extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>This is demo of section list</Text>
                    <Text>----------------------------</Text>
                </View>
                <View>
                    <SectionList
                        sections={[
                            {title: 'A', data: ['AAA', 'AAB']},
                            {title: 'B', data: ['BBB', 'Bob', 'Brice']},
                            {title: 'C', data: ['CCC', 'Cow', 'Cold', 'Cole']},
                            {title: 'D', data: ['Devin', 'David']},
                            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},

                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        paddingLeft: 10,
        paddingRight: 10
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
