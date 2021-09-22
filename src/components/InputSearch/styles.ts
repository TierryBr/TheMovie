import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 0 auto;
  padding-top: 25px;
  align-items: center;
  padding-bottom: 5px;
`;

export const ContainerInput = styled.View`
  width: 85%;
  height: 40px;
  background-color: #fff;
  border-width: 1px;
  border-color: #6485D2;
  border-radius: 15px;
`;

export const InputDirection = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const TextInputTyped = styled.TextInput`
  flex: 1;
  padding: 8px;
  width: 100%;
  height: 100%;
  font-size: 15px;
  color: #000;
`;
