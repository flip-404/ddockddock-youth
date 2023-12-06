import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const data = {
    hoho: '냠냠',
  }
  return NextResponse.json({ data })
}

export async function POST(request: NextRequest) {
  const res = await request.json()
  return NextResponse.json({ res })
}
