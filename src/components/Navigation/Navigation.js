import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default screensMap => {
  return function() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {Object.keys(screensMap).map(name => {
            const Screen = screensMap[name];
            return <Stack.Screen name={name} component={Screen} key={name} />;
          })}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
};
