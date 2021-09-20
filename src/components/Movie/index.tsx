import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import {unavailable, img_1280} from '../../config/Variables';

import {Movie, Poster, Content, Title, Year, Vote, NumberVote} from './styles';

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
      <Movie >
        <Poster source={(data.poster_path) ? {uri: `${img_1280}/${data.poster_path}`} : (unavailable) as any}/>
        <Content >
          <Title ellipsizeMode='tail' numberOfLines={2} style={{width: 215}}>{data.title}</Title>
          <Year >{data.release_date.slice(0, 4)} - {data.original_language.toUpperCase()}</Year>
          <Vote >
            <NumberVote >{data.vote_average}</NumberVote>
          </Vote>
        </Content>
      </Movie>
    </TouchableOpacity>
  );
}