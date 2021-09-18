import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';

import { ApplicationState } from '../../store'
import { connect, useDispatch, useSelector} from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as MoviesActions from '../../store/ducks/movies/actions'
import { Movies } from '../../store/ducks/movies/types'

import { styles } from './styles';
import { loadRequest } from '../../store/ducks/movies/actions';

interface StateProps {
  movies: Movies[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

function MovieList() {
  const {data}  = useSelector((state: ApplicationState) => state.movies);

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
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  );
}

export default MovieList;
