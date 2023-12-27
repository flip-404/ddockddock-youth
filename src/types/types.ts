// Prisma Client Types
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
  comments: Comment[]
  Bookmark: Bookmark[]
}

type Bookmark = {
  id: number
  user: User
  userId: number
  workbook: Workbook
  workbookId: number
  createdAt: Date
  updatedAt: Date
}

type Token = {
  id: number
  payload: string
  user: User
  userId: number
  createdAt: Date
  updatedAt: Date
}

type Category = {
  id: number
  name: string
  workbooks: Workbook[]
}

type Workbook = {
  id: number
  title: string
  description?: string | null
  author: User
  authorId: number
  problems: Problem[]
  createdAt: Date
  category?: Category | null
  categoryId?: number | null
  Bookmark: Bookmark[]
}

type Problem = {
  id: number
  question: string
  answer: string
  workbook: Workbook
  workbookId: number
  comments: Comment[]
}

type Comment = {
  id: number
  content: string
  user: User
  userId: number
  problem: Problem
  problemId: number
  like: Array<any>
  dislike: Array<any>
  createdAt: Date
  updatedAt: Date
}

export type { Category, User, Token, Workbook, Problem, Comment }
