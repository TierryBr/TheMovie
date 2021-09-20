import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';
import api from '../../services/api';
import {unavailable, img_1280} from '../../config/Variables';
import {REACT_APP_API_KEY} from '@env';

interface RoutesParams {
  id: string
}

interface Movie {
  id: string,
  title: string,
  overview: string,
  original_language: string,
  release_date: string,
  vote_average: string,
  poster_path: string,
  backdrop_path: string
}

export default function Details() {
  const route = useRoute();
  const [movie, setMovie] = useState<Movie>();

  const params = route.params as RoutesParams;

  useEffect(() => {
    api.get(`/movie/${params.id}?api_key=${REACT_APP_API_KEY}`)
    .then(res => {
      setMovie(res.data);
    })
  }, [params.id]);

  if(!movie) {
    return (
      <View style={styles.container}>
        <Text>Carregandoo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={(movie.poster_path) ? {uri: `${img_1280}/${movie.backdrop_path}`} : (unavailable) as any}/>
      <Text>{movie.title}</Text>
      <Text>{movie.overview}</Text>
    </View>
  );
}