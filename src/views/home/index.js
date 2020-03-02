import React from 'react';
import {NativeModules} from 'react-native';
const embeddedVC = NativeModules.NativeVC;

import {
  ScrollView,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Button,
} from 'react-native';

import Counter from '../../components/Counter/index';
import Ghibli from '../../components/Ghibli/index';

import style from './Style';

export default function Home({navigation}) {
  const testBridging = () => embeddedVC.test('\n\n\n\nHello component\n\n\n\n');

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={style.scrollView}>
          <View style={style.body}>
            <View style={style.wrapper}>
              <Text style={style.normalText}> Check xcode console </Text>
              <Button title="Test The Bridge" onPress={() => testBridging()} />
            </View>

            <View style={style.wrapper}>
              <Text style={style.normalText}> Go to: </Text>
              <Button
                style={style.titleText}
                title="Reload View"
                onPress={() => navigation.navigate('Reload')}
              />
              <Button
                style={style.titleText}
                title="Debug View"
                onPress={() => navigation.navigate('Debug')}
              />
              <Button
                style={style.titleText}
                title="Docs View"
                onPress={() => navigation.navigate('Docs')}
              />
            </View>

            <View style={style.wrapper}>
              <Text style={style.normalText}>
                {' '}
                Have fun changing this counter...{' '}
              </Text>
              <Counter />
            </View>

            <View style={style.wrapper}>
              <Ghibli />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
