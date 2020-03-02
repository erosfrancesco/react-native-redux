import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {
    LearnMoreLinks
} from 'react-native/Libraries/NewAppScreen';

import style from './Style'


export default function DocsView({navigation}) {
    return (
        <>
            <View style={style.sectionContainer}>
                <Text style={style.sectionTitle}>Learn More</Text>
                <Text style={style.sectionDescription}>
                    Read the docs to discover what to do next:
                </Text>
            </View>

            <LearnMoreLinks />
        </>
    );
}