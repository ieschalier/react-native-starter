// @flow

import React from 'react'
import Counter from './Counter'
import GithubUser from './GithubUser'
import { Container, Image } from './Styled'

const App = () => (
  <Container>
    <Image
      resizeMode="contain"
      source={{
        uri:
          'https://cdn-images-1.medium.com/max/1600/1*BpaqVMW2RjQAg9cFHcX1pw.png',
      }}
    />
    <Counter />
    <GithubUser />
  </Container>
)

export default App
