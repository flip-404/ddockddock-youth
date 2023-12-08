// 로그아웃 API POST

export async function GET() {
  const data = {
    hoho: '홍홍',
  }
  return Response.json({ data })
}

export async function POST(request: Request) {
  const res = await request.json()
  return Response.json({ res })
}
