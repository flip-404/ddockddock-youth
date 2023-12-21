'use client'

import Link from 'next/link'
import WorkbookTable from '@/app/components/workbookTable'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import BackButton from '@/app/components/backButton'

interface ActivityProps {
  params: { nickname: string }
}

export default function Activity({ params: { nickname } }: ActivityProps) {
  const { data: session } = useSession()

  const personalWorkbookUrl = session
    ? `/api/workbook?nickname=${nickname}`
    : null

  const { data: personalWorkbook, isLoading: personalWbLoading } = useSWR(
    personalWorkbookUrl,
    async (url: string) => {
      const response = await fetch(url)
      const data = await response.json()
      console.log('data', data)
      return data
    },
  )

  return (
    <div className="flex flex-col justify-center w-full h-full">
      <BackButton />
      <div className="flex flex-col h-full gap-3">
        <div className="flex font-bold text-4xl">
          <p className="text-blue-500">[{decodeURIComponent(nickname)}]</p>
          님의 활동
        </div>
        <div className="flex justify-between w-full items-center ">
          <div className="flex font-bold text-2xl">작성한 문제집</div>
          {session?.user.nickname === decodeURIComponent(nickname) && (
            <Link
              href="/workbook/write"
              className="rounded bg-emerald-400 text-white font-semibold py-2 px-4 hover:bg-emerald-500"
            >
              나만의 문제집 만들기
            </Link>
          )}
        </div>
        <div className="overflow-hidden">
          <WorkbookTable
            isLoading={personalWbLoading}
            workbooks={personalWorkbook?.workbooks || []}
          />
        </div>
        <div className="flex font-bold text-2xl">최근 풀이한 문제집</div>
        <div className="overflow-hidden">
          <WorkbookTable
            isLoading={personalWbLoading}
            workbooks={personalWorkbook?.workbooks || []}
          />
        </div>
      </div>
    </div>
  )
}
