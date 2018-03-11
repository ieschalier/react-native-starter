import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import actions from '../actions'
import type { State } from '../types/Sate'

type Props = {
  count: number,
  increment: () => void,
  decrement: () => void,
}

const Counter = ({ count, increment, decrement }: Props) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Text>{count}</Text>
    <Button onPress={increment} title="Increment" />
    <Button onPress={decrement} title="Decrement" />
  </View>
)

export default connect(
  ({ count }: State) => ({
    count,
  }),
  {
    ...actions,
  },
)(Counter)
