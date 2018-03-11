// @flow
import type { User } from './User'

export type GenericAction = { type: string }

export type GithubAction = { type: string, user: User }

export type Action = GithubAction | GenericAction
