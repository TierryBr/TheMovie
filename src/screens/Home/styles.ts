import styled from 'styled-components/native';

export const ListMovie = styled.View`
  color: ${props => props.theme.colors.text};
  width: 100%;
  padding: 0 0 0 20px;
  background-color: ${props => props.theme.colors.background}
`;

export const LoadMore = styled.TouchableOpacity`
  width: 150px;
  height: 35px;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  border-radius: 20px;
  margin-bottom: 10px;
  border: 1px solid #6485D0;
`;

export const MoreText = styled.Text`
  justify-content: center;
  color: ${props => props.theme.colors.text};
  align-items: center;
`;