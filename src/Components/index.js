// @flow

import React from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import GithubUser from './GithubUser'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Image = styled.Image`
  width: 250;
  height: 100;
`

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
