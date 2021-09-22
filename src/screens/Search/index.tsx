import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import InputSearch from '../../components/InputSearch';

import genres from '../../utils/genres.json';

import {Container, GenreList, GenreName, GenreItem} from './styles';

export default function Search() {

  const navigation = useNavigation();

  const handleSearch = (id) => {
    navigation.navigate('SearchResults', {
      typeRequest: 'discover',
      name: genres[id].name,
      id
    });
  };

  return (
    <Container>
        <InputSearch navigate={navigation} />
        <GenreList >
          {Object.keys(genres).map((id) => (
            <GenreItem
              key={id}
              onPress={() => handleSearch(id)}
            >
              <GenreName>{genres[id].name}</GenreName>
            </GenreItem>
          ))}
        </GenreList>
      </Container>
  );
}

