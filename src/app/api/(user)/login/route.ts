// 로그인 API POST

import { signJwtAccessToken } from '@/app/libs/jwt'
import client from '@/app/libs/server/client'
import * as bcrypt from 'bcrypt'

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const user = await client.user.findFirst({
    where: {
      email: body.email,
    },
  })

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user

    const accessToken = signJwtAccessToken(userWithoutPass)
    const result = {
      ...userWithoutPass,
      accessToken,
    }

    return new Response(JSON.stringify(result))
  } else return new Response(JSON.stringify(null))
}
