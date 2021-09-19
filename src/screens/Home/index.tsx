import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import * as MoviesActions from '../../store/ducks/movies/actions';
import { Movies } from '../../store/ducks/movies/types';

import { styles } from './styles';
import { loadRequest } from '../../store/ducks/movies/actions';

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

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Text>ola mundo</Text>
      
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image style={styles.image} source={{
              uri: `https://image.tmdb.org/t/p/w1280/${item.poster_path}`
            }}/>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default MovieList;
