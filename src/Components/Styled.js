import styled from 'styled-components'
import { mix } from 'polished'

const interpolateColor = ({ value = 0 }) => {
  const weight = Math.max(0, Math.min(value / 10, 1))
  return `color: ${mix(weight, '#3f3', '#111')}`
}

export const Value = styled.Text`
  font-size: 25px;
  ${interpolateColor};
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
