import styled from 'styled-components/native';

export const DetailContainer = styled.ScrollView`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
`;

export const Backdrop = styled.Image`
  width: 100%;
  height: 220px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
  color: ${props => props.theme.colors.text};
`;

export const Overview = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.text};
`;

export const InfoContent = styled.View`
  margin-right: 35px;
`;

export const TitleInfo = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};;
  font-size: 18px;
`;

export const ProductionLogo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;





