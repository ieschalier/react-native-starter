// @flow

import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import App from './Components'
import { configureStore } from './store'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default class Index extends React.Component<{}> {
  componentDidMount = async () => {
    this.store = await configureStore()
    this.forceUpdate()
  };

  store = null;

  render() {
    return (
      <Container>
        {this.store && (
          <Provider store={this.store}>
            <App />
          </Provider>
        )}
      </Container>
    )
  }
}
