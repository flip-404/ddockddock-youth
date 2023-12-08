// 회원가입 API POST

import client from '@/libs/server/client'

export async function POST(request: Request) {
  // 이메일 있는지 확인, 닉네임 있는지 확인 o
  // 이거 API를 따로 만들어서 validate로 지정하는게 나을듯
  const { email, nickname } = await request.json()

  const exists = await client.user.findFirst({
    where: { OR: [{ email }, { nickname }] },
  })

  if (exists?.email === email)
    return Response.json({
      success: false,
      message: '이미 존재하는 이메일입니다.',
      error: {
        code: 'email',
      },
    })
  else if (exists?.nickname === nickname)
    return Response.json({
      success: false,
      message: '이미 존재하는 닉네임입니다.',
      error: {
        code: 'nickname',
      },
    })
  else
    return Response.json({
      success: true,
      message: '이미 존재하는 이메일입니다.',
      error: null,
    })
}
