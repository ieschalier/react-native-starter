// @flow
import type { User } from './User'

export type CountState = number

export type GithubState = {
  +user?: User,
  +loading: number,
}

export type State = {
  +github: GithubState,
  +count: CountState,
}
