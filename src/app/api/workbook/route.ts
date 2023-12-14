// 문제집 API

import { signJwtAccessToken } from '@/app/libs/jwt'
import client from '@/app/libs/server/client'
import * as bcrypt from 'bcrypt'

interface RequestBody {
  email: string
  password: string
}

export async function GET(request: Request) {}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  //   const user = await client.user.create({
  //     data: {
  //       name: body.name,
  //       email: body.email,
  //       password: await bcrypt.hash(body.password, 10), // 바뀐 부분
  //     },
  //   })
}
