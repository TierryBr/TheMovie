import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import * as MoviesActions from '../../store/ducks/movies/actions';
import { Movies } from '../../store/ducks/movies/types';

import { useNavigation } from '@react-navigation/native';
import Movie from '../../components/Movie';
import {ListMovie, More, MoreText} from './styles';
import api from '../../services/api';
import {REACT_APP_API_KEY} from '@env';

import Genres from '../../components/Genres';
import genre from '../../store/ducks/genres';
import request from '../../services/api';


interface StateProps {
  movies: Movies[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

function MovieList({route}: any) {
  const { data } = useSelector((state: ApplicationState) => state.movies);
  const [movie, setMovie] = useState(data);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  
  const getMovies = () => {
    dispatch(MoviesActions.loadRequest());
    setMovie([...data]);
  };

  const {
    params: { id = null, name = null, typeRequest = '' } = {}
  } = route;

  const getQueryRequest = () => {
    if(typeRequest === '') {
      api.get(`movie/popular?api_key=${REACT_APP_API_KEY}&page=${count}`)
      .then((res) => {
        setMovie(res.data.results);
        window.scroll(0,0); 
      })
      .catch((error) => {
        console.log(error)
      })
    }

    if (typeRequest === 'discover') {
      api.get(`movie/popular?api_key=${REACT_APP_API_KEY}&page=${count}`, {
        params: {
          with_genres: `${id}`
        }
      })
      .then((res) => {
        setMovie(res.data.results);
        window.scroll(0,0); 
      })
      .catch((error) => {
        console.log(error)
      })
    }

    if (typeRequest === 'search') {
      api.get(`search/movie?api_key=${REACT_APP_API_KEY}&page=${count}`, {
        params: {
          query: `${name}`
        }
      })
      .then((res) => {
        setMovie(res.data.results);
        window.scroll(0,0); 
      })
      .catch((error) => {
        console.log(error)
      })
    }

    return null;
  };

  useEffect(() => {
    getQueryRequest()
  }, [count]);
  
  const navigation = useNavigation();
  
  function handleNavigateDetails(id: string) {
    navigation.navigate('Details', {id});
  }
  
  const handleMore = useCallback(async () => {
    try {
      const response = await api.get(`movie/popular?api_key=${REACT_APP_API_KEY}&page=${count}`);
      setMovie([...movie, ...response.data.results]);
      setCount(count + 1);
      window.scroll(0,0); 
    }
    catch(error) {
      console.log(error);
    }
  }, [movie, count]);

  const renderFooter = () => {
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <ListMovie>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <FlatList
        data={movie}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => (
          <Movie data={item} onPress={() => handleNavigateDetails(item.id)}/>
        )}
        contentContainerStyle={{paddingBottom: 69}}
      />
      
      <More onPress={handleMore}>
        <MoreText>Ver mais</MoreText>
      </More>

    </ListMovie>
  );
}

export default MovieList;
