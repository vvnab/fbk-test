export interface IUser {
  id: number
  login: string
  avatar_url: string
}

export interface IComment {
  user: IUser
  body: string
  created_at: string
}

export interface IIssue{
  id: number
  number: number
  url: string
  repository_url: string
  comments_url: string
  title: string
  user: IUser
  state: string
  created_at: string
  closed_at: string
  body: string
  comments: IComment[]
}

export interface IRepository {
  name: string
}

export interface IList<type> {
  total_count: number
  items: type[]
}
