import React, {Component} from 'react';

import {
  View,
  Text
} from 'react-native';

import {
    DebugInstructions
} from 'react-native/Libraries/NewAppScreen';

import style from './Style'


export default class DebugView extends Component {
    render() {
        return (
            <>
                <View style={style.sectionContainer}>
                    <Text style={style.sectionTitle}>Debug</Text>
                    <Text style={style.sectionDescription}>
                        <DebugInstructions />
                    </Text>
                </View>
            </>
        );
    }
}