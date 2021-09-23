import styled from 'styled-components/native';

export const MoreContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

export const Container = styled.View`
  flex-direction: row;
  padding: 20px;
`;

export const TitleInfo = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};;
  font-size: 18px;
  margin-right: 20px;
`;
