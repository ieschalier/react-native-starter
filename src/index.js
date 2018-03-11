import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import App from './Components'
import { configureStore } from './store'

export default class Index extends React.Component {
  componentDidMount = async () => {
    this.store = await configureStore()
    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.container}>
        {this.store && (
          <Provider store={this.store}>
            <App />
          </Provider>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})