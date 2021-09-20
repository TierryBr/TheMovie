import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';
import api from '../../services/api';

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
    api.get(`/movie/${params.id}?api_key=bc232e75d0432d93f3c6d11fca222446`)
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
      <Image style={styles.image} source={{
          uri: `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
      }}/>
      <Text>{movie.title}</Text>
      <Text>{movie.overview}</Text>
    </View>
  );
}