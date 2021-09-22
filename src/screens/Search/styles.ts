import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const GenreList = styled.ScrollView`
  margin-top: 25;
`;

export const GenreName = styled.Text`
  font-size: 20;
  text-align: center;
  color: #fff;
`;

export const GenreItem = styled.TouchableOpacity`
  width: 250;
  height: 35;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 15;
  background-color: #6485D0;
  border-radius: 20px
`;