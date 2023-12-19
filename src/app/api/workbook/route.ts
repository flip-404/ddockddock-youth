// 문제집 API

import client from '@/app/libs/server/client'

interface RequestBody {
  email: string
  password: string
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const userId = url.searchParams.get('userId')
  const workbookId = url.searchParams.get('workbookId')

  if (userId) {
    const user = await client.user.findUnique({
      where: { id: +userId },
      include: {
        WorkBooks: {
          include: { author: true },
        },
      },
    })
    return new Response(JSON.stringify({ workbooks: user?.WorkBooks }))
  } else if (workbookId) {
    const workbook = await client.workbook.findUnique({
      where: { id: +workbookId },
      include: { problems: true },
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
}
