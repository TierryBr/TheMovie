import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Container, ContainerInput, InputDirection, TextInputTyped} from './styles';

const InputSearch = ({ navigate }: any) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (value: string) => {
    setSearch(value);
  };

  const handleClearSearch = () => {
    setSearch('');
  };

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (search) {
      navigation.navigate('SearchResults', {
        typeRequest: 'search',
        name: search
      });
    }
  };

  return (
    <Container >
      <ContainerInput>
        <InputDirection>
          <Icon
            style={{padding: 8}}
            name="ios-search-outline"
            size={20}
            color={'#0c2e7e'}
          />
          <TextInputTyped
            onSubmitEditing={handleSubmit}
            onChangeText={value => onChangeSearch(value)}
            value={search}
            accessibilityRole="search"
            returnKeyType="search"
            keyboardType="default"
            blurOnSubmit
            multiline={false}
            autoCorrect={false}
            underlineColorAndroid="transparent"
            placeholderTextColor={'gray'}
            placeholder="Digitar"
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={handleClearSearch}>
              <Icon
                style={{padding: 8}}
                name="ios-close-outline"
                size={20}
                color={'red'}
              />
            </TouchableOpacity>
          )}
        </InputDirection>
      </ContainerInput>
    </Container>
  );
};

export default InputSearch;