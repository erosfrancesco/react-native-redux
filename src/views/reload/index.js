import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {
    ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

import style from './Style'


export default function ReloadView({navigation}) {
    return (
        <>
            <View style={style.sectionContainer}>
                <Text style={style.sectionTitle}>See Your Changes</Text>
                <Text style={style.sectionDescription}>
                    <ReloadInstructions />
                </Text>
            </View>
        </>
    );
}