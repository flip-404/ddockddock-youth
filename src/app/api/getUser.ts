import client from '@/app/libs/server/client'

export async function getUserById(id: number) {
  return await client.user.findUnique({
    where: { id },
    include: {
      workbooks: {
        include: { author: true },
      },
    },
  })
}

export async function getUserByNickname(nickname: string) {
  return await client.user.findUnique({
    where: { nickname },
    include: {
      workbooks: {
        include: { author: true },
      },
    },
  })
}
