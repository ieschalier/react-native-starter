import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import actions from '../actions'

const GithubUser = ({ user, fetchGithubUser, clearGithubUser }) => (
  <View
    style={{ marginTop: 30, alignItems: 'center', justifyContent: 'center' }}
  >
    {user && <Text>{user.login}</Text>}
    <Button onPress={() => fetchGithubUser('ieschalier')} title="Fetch user" />
    <Button onPress={clearGithubUser} title="Clear user" />
  </View>
)

export default connect(({ github }) => ({ user: github.user }), {
  ...actions,
})(GithubUser)
