import styled from 'styled-components/native';

export const Movie = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 25px;
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

export const NumberVote = styled.Text`
  font-size: 18px;
  background-color: gray;
  color: #fff;
  width: 70px;
  border-radius: 15px;
  padding: 3px;
  text-align: center;
`;