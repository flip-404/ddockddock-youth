// 문제집 API

import client from '@/app/libs/server/client'
import { User, Problem } from '@prisma/client'
import { getUserById, getUserByNickname } from '../getUser'

interface RequestBody {
  user: User
  problem: Problem
  content: string
}
export async function GET(request: Request) {
  const url = new URL(request.url)
  const problemId = url.searchParams.get('problemId')
  console.log('problemId', problemId)
  if (!problemId) {
    return new Response(JSON.stringify({ success: false }))
  }

  const comments = await client.comment.findMany({
    where: {
      problemId: +problemId,
    },
    include: { user: true },
  })

  console.log(comments)

  return new Response(JSON.stringify({ comments }))
}

export async function POST(request: Request) {
  const { user, problem, content }: RequestBody = await request.json()
  if (!user || !problem) {
    return new Response(JSON.stringify({ success: false }))
  }

  const comment = await client.comment.create({
    data: { userId: user.id, problemId: problem.id, content },
  })

  return new Response(JSON.stringify({ success: true, comment }))
}
