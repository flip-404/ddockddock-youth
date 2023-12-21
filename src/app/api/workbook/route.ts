// 문제집 API

import client from '@/app/libs/server/client'
import { User } from '@prisma/client'
import { getUserById, getUserByNickname } from '../getUser'

type WorkbookInfo = {
  title: string
  description: string
}

type Problem = {
  question: string
  answer: string
}

interface RequestBody {
  author: User
  workbookInfo: WorkbookInfo
  problems: Problem[]
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const userId = url.searchParams.get('userId')
  const nickname = url.searchParams.get('nickname')
  const workbookId = url.searchParams.get('workbookId')

  let user

  if (userId) {
    user = await getUserById(+userId)
  } else if (nickname) {
    user = await getUserByNickname(nickname)
  } else if (workbookId) {
    const workbook = await client.workbook.findUnique({
      where: { id: +workbookId },
      include: { problems: true, author: true },
    })

    return new Response(JSON.stringify({ workbook }))
  } else {
    const workbooks = await client.workbook.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: { author: true },
    })

    return new Response(JSON.stringify({ workbooks }))
  }

  return new Response(JSON.stringify({ workbooks: user?.workbooks }))
}

export async function POST(request: Request) {
  const { author, workbookInfo, problems }: RequestBody = await request.json()

  if (!author || !workbookInfo || !problems) {
    return new Response(JSON.stringify({ success: false }))
  }

  const user = await client.user.findUnique({
    where: { id: author.id },
  })

  if (!user) return new Response(JSON.stringify({ success: false }))

  const workbook = await client.workbook.create({
    data: {
      title: workbookInfo.title,
      description: workbookInfo.description,
      authorId: user.id,
    },
  })

  const problemCreatePromises = problems.map(async (problem) => {
    return client.problem.create({
      data: {
        question: problem.question,
        answer: problem.answer,
        workbookId: workbook.id,
      },
    })
  })

  await Promise.all(problemCreatePromises)
  return new Response(JSON.stringify({ success: true }))
}
