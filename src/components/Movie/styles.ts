import styled from 'styled-components/native';

export const Movie = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 80%
`;

export const Poster = styled.Image`
  width: 120px;
  height: 160px;
  border-radius: 8px;
`;

export const Content = styled.View`
  margin-left: 20px;
`;
  
  export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const Year = styled.Text`
  font-size: 15px;
`;

export const Vote = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const NumberVoteGreen = styled.Text`
  font-size: 18px;
  background-color: #60BF8F;
  color: #fff;
  width: 55px;
  border-radius: 15px;
  padding: 1px;
  text-align: center;
`;

export const NumberVoteRed = styled(NumberVoteGreen)`
  background-color: #FA5743;
`;

export const NumberVoteYellow = styled(NumberVoteGreen)`
  background-color: #C49D54;
`;