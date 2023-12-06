// 회원가입 API POST

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const res = await request.json()
  return NextResponse.json({ res })
}
