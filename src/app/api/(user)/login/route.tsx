// 로그인 API POST

import client from '@/libs/server/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const data = {}
  return NextResponse.json({ data })
}

// export async function POST(request: NextRequest) {
//   const { email } = request.body
//   if(email){
//     const user = await client.user.findUnique({
//       where:{
//         email
//       }
//     })
//   }

//   const res = await req uest.json()
//   return NextResponse.json({ res })
// }
