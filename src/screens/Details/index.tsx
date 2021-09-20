import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';
import {unavailable, img_1280} from '../../config/Variables';
import {REACT_APP_API_KEY} from '@env';
import {DetailContainer, Backdrop, Title, Overview, InfoContent, TitleInfo, ProductionLogo} from './styles';


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
  backdrop_path: string,
  runtime: string,
  genres: Array<{
    id: number,
    name: string,
  }>,
  revenue: string,
  production_companies: Array<{
    id: number,
    name: string,
    logo_path: string
  }>,
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
      <DetailContainer>
        <Text>Carregandoo...</Text>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <Backdrop source={(movie.poster_path) ? {uri: `${img_1280}/${movie.backdrop_path}`} : (unavailable) as any}/>
      <Title>{movie.title}</Title>
      <View style={{padding: 10}}>
        <TitleInfo>Descrição</TitleInfo>
        <Overview>{movie.overview}</Overview>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingTop: 15, paddingBottom: 15, marginTop: 15}}>
            <InfoContent>
              <TitleInfo>Gênero</TitleInfo>
              {movie.genres.map(genre => {
                return (<Overview key={genre.id}>{genre.name}</Overview>)
              })}
            </InfoContent>
            <InfoContent>
              <TitleInfo>Duração</TitleInfo>
              <Overview>{movie.runtime}</Overview>
            </InfoContent>
            <InfoContent>
              <TitleInfo>Lançamento</TitleInfo>
              <Overview>{movie.release_date}</Overview>
            </InfoContent>
            <InfoContent>
              <TitleInfo>Receita</TitleInfo>
              <Overview>${movie.revenue}</Overview>
            </InfoContent>
          </ScrollView>

            <View style={{marginTop: 15}}>
              <TitleInfo>Produtoras</TitleInfo>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 100}}>
                    {movie.production_companies.map(production => {
                      return (
                        <View style={{marginRight: 20, alignItems: 'center'}}>
                          <ProductionLogo source={(production.logo_path) ? {uri: `${img_1280}/${production.logo_path}`} : (unavailable) as any}/>
                          <Overview key={production.id}>{production.name}</Overview>
                        </View>
                      )
                    })}
                </ScrollView>
            </View>
        </View>
      
    </DetailContainer>
  );
}