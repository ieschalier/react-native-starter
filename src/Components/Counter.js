import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import actions from '../actions'

const Counter = ({ count, increment, decrement }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Text>{count}</Text>
    <Button onPress={increment} title="Increment" />
    <Button onPress={decrement} title="Decrement" />
  </View>
)

export default connect(
  ({ count }) => ({
    count,
  }),
  {
    ...actions,
  },
)(Counter)
