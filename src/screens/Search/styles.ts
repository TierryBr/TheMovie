import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const GenreList = styled.ScrollView`
  margin-top: 25px;
`;

export const GenreName = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.colors.background};;
`;

export const GenreItem = styled.TouchableOpacity`
  width: 250px;
  height: 35px;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 20px
`;