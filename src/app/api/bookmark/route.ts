// 문제집 API

import client from '@/app/libs/server/client'
import { User, Workbook } from '@prisma/client'
import { getUserById, getUserByNickname } from '../getUser'

type Problem = {
  question: string
  answer: string
}

interface RequestBody {
  user: User
  workbook: Workbook
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const userId = url.searchParams.get('userId')
  const workbookId = url.searchParams.get('workbookId')
  console.log('workbookId', workbookId)
  console.log('userId', userId)

  if (userId && workbookId) {
    const isBookmark = await client.bookmark.findFirst({
      where: { userId: +userId, workbookId: +workbookId },
    })

    return Response.json({ success: true, isBookmarked: isBookmark })
  } else if (userId) {
    const bookmark = await client.bookmark.findMany({
      where: { userId: +userId },
    })
    return Response.json({ success: true, bookmarkedWorkbook: bookmark })
  } else return Response.json({ success: false })
}

export async function POST(request: Request) {
  const {
    user: { id: userId },
    workbook: { id: workbookId },
  }: RequestBody = await request.json()

  if (!userId || !workbookId) {
    return new Response(JSON.stringify({ success: false }))
  }

  const existingBookmark = await client.bookmark.findFirst({
    where: {
      userId,
      workbookId,
    },
  })

  if (existingBookmark) {
    const deletedBookmark = await client.bookmark.delete({
      where: {
        id: existingBookmark.id,
      },
    })
    return new Response(
      JSON.stringify({ success: true, message: '즐겨찾기 취소' }),
    )
  }

  const bookmark = await client.bookmark.create({
    data: {
      userId,
      workbookId,
    },
  })
  return new Response(JSON.stringify({ success: true }))
}
