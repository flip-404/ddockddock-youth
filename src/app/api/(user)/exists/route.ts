import client from '@/libs/server/client'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const email = url.searchParams.get('email')
  const nickname = url.searchParams.get('nickname')
  let exists

  if (email) {
    exists = await client.user.findFirst({
      where: { email },
    })
  } else if (nickname) {
    exists = await client.user.findFirst({
      where: { nickname },
    })
  }

  return exists
    ? Response.json({ data: { exists: true } })
    : Response.json({ data: { exists: false } })
}
