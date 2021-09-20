import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import * as MoviesActions from '../../store/ducks/movies/actions';
import { Movies } from '../../store/ducks/movies/types';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Movie from '../../components/Movie';

interface StateProps {
  movies: Movies[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

function MovieList() {
  const { data } = useSelector((state: ApplicationState) => state.movies);

  const dispatch = useDispatch();

  const getMovies = () => {
    dispatch(MoviesActions.loadRequest());
  };

  const navigation = useNavigation();

  function handleNavigateDetails() {
    navigation.navigate('Details' as any);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Movie data={item} onPress={handleNavigateDetails}/>
        )}
        contentContainerStyle={{paddingBottom: 69}}
      />
    </View>
  );
}

export default MovieList;
