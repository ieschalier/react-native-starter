// @flow

import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import actions from '../actions'
import type { State } from '../types/Sate'

type Props = {
  user: {
    login: string,
  },
  fetchGithubUser: (username: string) => void,
  clearGithubUser: () => void,
}

const GithubUser = ({ user, fetchGithubUser, clearGithubUser }: Props) => (
  <View style={{ marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
    {user && <Text>{user.login}</Text>}
    <Button onPress={() => fetchGithubUser('ieschalier')} title="Fetch user" />
    <Button onPress={clearGithubUser} title="Clear user" />
  </View>
)

export default connect(({ github }: State) => ({ user: github.user }), {
  ...actions,
})(GithubUser)
