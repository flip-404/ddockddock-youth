import client from '@/libs/server/client'

export async function GET() {
  // const exists = await client.user.findFirst({
  //   where: { email: 'aka404365@gmail.com' },
  // })

  // return exists
  //   ? NextResponse.json({ data: { exists: true } })
  //   : NextResponse.json({ data: { exists: true } })

  return true
    ? Response.json({ data: { exists: true } })
    : Response.json({ data: { exists: true } })
}
