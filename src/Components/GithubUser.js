// @flow

import React from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import actions from '../actions'
import type { FetchGithubUser } from '../actions/github'
import type { State } from '../types/Sate'
import type { GenericAction } from '../types/Action'
import { Value } from './Styled'

const Container = styled.View`
  margin-top: 30;
  align-items: center;
  justify-content: center;
`

type Props = {
  user: {
    login: string
  },
  fetchGithubUser: FetchGithubUser,
  clearGithubUser: () => GenericAction
};

const GithubUser = ({ user, fetchGithubUser, clearGithubUser }: Props) => (
  <Container>
    {user && <Value>{user.login}</Value>}
    <Button onPress={() => fetchGithubUser('ieschalier')} title="Fetch user" />
    <Button onPress={clearGithubUser} title="Clear user" />
  </Container>
)

export default connect(({ github }: State) => ({ user: github.user }), {
  ...actions,
})(GithubUser)
