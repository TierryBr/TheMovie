import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import api from '../../services/api';
import {REACT_APP_API_KEY} from '@env';
import { useNavigation } from '@react-navigation/native';

export default function Genre({selectedGenres, setSelectedGenres, genres, setGenres}: any) {

  const navigation = useNavigation();

  const handleAdd = ((genre: any) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g: any) => g.id !== genre.id));
    navigation.navigate('Home');
  })

  const handleRemove = ((genre: any) => {
    setSelectedGenres(selectedGenres.filter((selected: any) => selected.id !== genre.id));
    setGenres([...genres, genre]);
  })

  const fetchGenres = async () => {
    const response = await api.get(`/genre/movie/list?api_key=${REACT_APP_API_KEY}`);
    setGenres(response.data.genres);
  }

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({})
    }
  }, [])

  return (
    <View>
      {selectedGenres && selectedGenres.map((genre: any) => (
        <TouchableOpacity onPress={() => handleRemove(genre)}>
          <Text style={{color: 'blue'}}>{genre.name}</Text>
        </TouchableOpacity>
      ))}
      {genres && genres.map((genre: any) => (
        <TouchableOpacity onPress={() => handleAdd(genre)}>
          <Text>{genre.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}