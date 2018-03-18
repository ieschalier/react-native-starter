// @flow

import React from 'react'
import { Text, Button } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import actions from '../actions'
import type { State } from '../types/Sate'
import type { GenericAction } from '../types/Action'

const Container = styled.View`
  align-items: center;
  justify-content: center;
`

type Props = {
  count: number,
  increment: () => GenericAction,
  decrement: () => GenericAction
};

const Counter = ({ count, increment, decrement }: Props) => (
  <Container>
    <Text>{count}</Text>
    <Button onPress={increment} title="Increment" />
    <Button onPress={decrement} title="Decrement" />
  </Container>
)

export default connect(
  ({ count }: State) => ({
    count,
  }),
  {
    ...actions,
  },
)(Counter)
