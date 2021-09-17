import React from 'react';
import {View,Text, StatusBar} from 'react-native';

import {styles} from './styles';

export function MovieList() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Text>Hello World</Text>
    </View>
  )
}
