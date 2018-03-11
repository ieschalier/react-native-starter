import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import Counter from './Counter'
import GithubUser from './GithubUser'
import actions from '../actions'

const App = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image
      style={{ width: 250, height: 100 }}
      resizeMode="contain"
      source={{
        uri:
          'https://cdn-images-1.medium.com/max/1600/1*BpaqVMW2RjQAg9cFHcX1pw.png',
      }}
    />
    <Counter />
    <GithubUser />
  </View>
)

export default App
