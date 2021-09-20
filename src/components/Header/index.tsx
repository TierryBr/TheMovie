import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { styles } from './styles';

interface HeaderProps {
  title: string,
  showFilter?: boolean,
}

export default function Header({title, showFilter = true}: HeaderProps) {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Icon name='arrow-left' size={24} color='#000' />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      { showFilter ? (
        <BorderlessButton onPress={() => {}}>
          <Icon name='filter' size={24} color='#000' />
        </BorderlessButton>
      ) : (
        <View />
      ) }
    </View>
  );
}