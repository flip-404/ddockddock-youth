import client from '@/app/libs/server/client'

interface Like {
  id: number
}

interface Dislike {
  id: number
}

export async function POST(request: Request) {
  const { userId, commentId, voteType } = await request.json()

  const existingLike: Like | null = await client.like.findFirst({
    where: { userId: +userId, commentId: +commentId },
  })

  const existingDislike: Dislike | null = await client.disLike.findFirst({
    where: { userId: +userId, commentId: +commentId },
  })

  if (voteType === 'like') {
    await handleLike(existingLike, existingDislike, userId, commentId)
  } else if (voteType === 'disLike') {
    await handleDislike(existingLike, existingDislike, userId, commentId)
  }

  return new Response(JSON.stringify({ success: true }))
}

async function handleLike(
  existingLike: Like | null,
  existingDislike: Dislike | null,
  userId: number,
  commentId: number,
) {
  console.log('엥: existingLike:', existingLike)
  if (existingDislike) {
    await client.disLike.delete({ where: { id: existingDislike.id } })
    await client.like.create({
      data: {
        user: { connect: { id: userId } },
        comment: { connect: { id: commentId } },
      },
    })
  } else if (existingLike) {
    await client.like.delete({ where: { id: existingLike.id } })
  } else {
    console.log('엥')
    await client.like.create({
      data: {
        user: { connect: { id: userId } },
        comment: { connect: { id: commentId } },
      },
    })
  }
}

// 싫어요 처리 함수
async function handleDislike(
  existingLike: Like | null,
  existingDislike: Dislike | null,
  userId: number,
  commentId: number,
) {
  if (existingLike) {
    // 이미 Like를 누른 상태이므로 Like를 취소하고 Dislike로 변경
    await client.like.delete({ where: { id: existingLike.id } })
    await client.disLike.create({
      data: {
        user: { connect: { id: userId } },
        comment: { connect: { id: commentId } },
      },
    })
  } else if (existingDislike) {
    // 이미 Dislike를 누른 상태이므로 Dislike를 취소
    await client.disLike.delete({ where: { id: existingDislike.id } })
  } else {
    // 처음 싫어요를 누르는 경우
    await client.disLike.create({
      data: {
        user: { connect: { id: userId } },
        comment: { connect: { id: commentId } },
      },
    })
  }
}
