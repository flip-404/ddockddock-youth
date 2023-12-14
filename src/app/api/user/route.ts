//app/api/user/route.ts

import client from '@/app/libs/server/client'
import * as bcrypt from 'bcrypt'

interface RequestBody {
  nickname: string
  email: string
  password: string
  description: string
}

export async function POST(request: Request) {
  const { email, password, nickname, description }: RequestBody =
    await request.json()

  const user = await client.user.create({
    data: {
      email,
      password: await bcrypt.hash(password, 10),
      nickname,
      description,
    },
  })

  const { ...result } = user
  return new Response(JSON.stringify(result))
}
