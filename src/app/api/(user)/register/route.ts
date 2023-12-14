// 회원가입 API POST

import client from '@/app/libs/server/client'
import * as bcrypt from 'bcrypt'

interface RequestBody {
  nickname: string
  email: string
  password: string
  description: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const user = await client.user.create({
    data: {
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      nickname: body.nickname,
      description: body.description,
    },
  })

  const { ...result } = user
  return new Response(
    JSON.stringify({
      success: true,
      message: '회원가입 완료',
      error: null,
      data: result,
    }),
  )
}
