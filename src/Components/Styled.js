import styled from 'styled-components'

export const Value = styled.Text`
  font-size: 25px;
  color: ${({ good }) => (good ? 'green' : '#111a')};
`

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 250;
  height: 100;
  margin-bottom: 50px;
`
