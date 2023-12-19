'use client'

import Link from 'next/link'
import InterviewTable from '@/app/interview/InterviewTable'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

// 현재 mine 이지만, 벨로그처럼 유저아이디로 접근가능하도록 만들어야 한다.

interface ProfileProps {
  params: { nickname: string }
}

export default function Profile({ params: { nickname } }: ProfileProps) {
  const { data: session } = useSession()
  const user = session?.user
  const { data, error } = useSWR(
    `/api/workbook/${user?.id}`,
    async (url: string) => {
      const response = await fetch(url)
      const data = await response.json()
      return data
    },
  )

  return (
    <div className="flex flex-col justify-center w-full h-full">
      <div className="flex flex-col h-full gap-3">
        <div className="flex font-bold text-4xl">
          <p className="text-blue-500">[{user?.nickname}]</p>님의 프로필
        </div>
        <div className="flex justify-between w-full items-center ">
          <div className="flex font-bold text-2xl">작성한 문제집</div>
          {user?.nickname === decodeURIComponent(nickname) && (
            <Link
              href="/interview/write"
              className="rounded bg-emerald-400 text-white font-semibold py-2 px-4 hover:bg-emerald-500"
            >
              나만의 문제집 만들기
            </Link>
          )}
        </div>
        <div className="overflow-hidden">
          <InterviewTable />
        </div>
        <div className="flex font-bold text-2xl">최근 풀이한 문제집</div>
        <div className="overflow-hidden">
          <InterviewTable />
        </div>
      </div>

      {/* <div className="flex justify-between gap-2">
    <div className="flex items-center font-bold text-4xl">
      <p className="text-blue-500">[{user?.nickname}]</p>님이 제작한 문제집
    </div>
    <Link
      href="/interview/write"
      className="rounded bg-emerald-400 text-white font-semibold py-2 px-4 hover:bg-emerald-500"
    >
      나만의 문제집 만들기
    </Link>
  </div>
  <div>
    <InterviewTable />
  </div> */}
    </div>
  )
}
