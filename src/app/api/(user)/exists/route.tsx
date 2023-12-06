// 이메일 / 아이디 중복확인 API GET

import { NextRequest, NextResponse } from 'next/server'
import client from '@/libs/server/client'

// export async function GET() {
//   const data = {
//     hoho: '냠냠',
//   }
//   return NextResponse.json({ data })
// }

type ExistsAPI = {
  email: string
}

export async function GET({ email }: ExistsAPI) {
  const isExists = await client.user.findUnique({
    where: {
      email: 'aka404365@gmail.com',
    },
  })

  console.log('client', client)

  console.log('테스트 ', isExists)

  return isExists
    ? NextResponse.json({ isExists: true })
    : NextResponse.json({ isExists: false })
}
