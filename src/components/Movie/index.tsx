import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import {unavailable, img_1280} from '../../config/Variables';

import { styles } from './styles';

export type MoviesProps = {
  id: string,
  title: string,
  overview: string,
  original_language: string,
  release_date: string,
  vote_average: string,
  poster_path: string,
  backdrop_path: string
}

type Props = {
  data: MoviesProps
}

export default function Movies({data,...rest}: Props) {

  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <Image style={styles.image} source={(data.poster_path) ? {uri: `${img_1280}/${data.poster_path}`} : (unavailable) as any}/>
        <View style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.year}>{data.release_date.slice(0, 4)} - {data.original_language.toUpperCase()}</Text>
          <View style={styles.vote}>
            <Text style={styles.numbervote}>{data.vote_average}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}