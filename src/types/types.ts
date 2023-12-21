type User = {
  id: number
  email: string
  password: string
  nickname: string
  description?: string | null
  createdAt: Date
  updatedAt: Date
  tokens: Token[]
  workbooks: Workbook[]
}

type Token = {
  id: number
  payload: string
  user: User
  userId: number
  createdAt: Date
  updatedAt: Date
}

type Workbook = {
  id: number
  title: string
  description?: string | null
  author: User
  authorId: number
  problems: Problem[]
  createdAt: Date
}

type Problem = {
  id: number
  question: string
  answer: string
  workbook: Workbook
  workbookId: number
}

export type { User, Token, Workbook, Problem }
