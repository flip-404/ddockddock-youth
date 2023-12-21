'use client'

import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import useSWR from 'swr'
import WorkbookTable from './components/workbookTable'

export default function Home() {
  const { data: session } = useSession()
  const personalWorkbookUrl = session
    ? `/api/workbook?userId=${session.user.id}`
    : null

  const { data: publicWorkbook, isLoading: publicWbLoading } = useSWR(
    '/api/workbook',
    async (url: string) => {
      const response = await fetch(url)
      const data = await response.json()
      return data
    },
  )

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
    <div className="flex gap-7 flex-col w-full h-full">
      <div className="flex">
        {session && session.user ? (
          <button
            className="rounded-xl border bg-red-300 px-12 py-4"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        ) : (
          <Link
            href="/login"
            className="mt-2 bg-indigo-500 py-2 px-3 rounded-lg text-white"
          >
            로그인
          </Link>
        )}
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col h-1/2 overflow-hidden gap-2 mt-2 rounded-xl">
          <Link href="/workbook" className="flex gap-2 hover:text-orange-500">
            <div className="font-bold text-4xl">공유 문제집</div>
            <div className="flex flex-col justify-end">
              누군가 정성껏 제작한 문제집을 풀어보세요!
            </div>
          </Link>

          <WorkbookTable
            isLoading={publicWbLoading}
            workbooks={publicWorkbook?.workbooks || []}
          />
        </div>
        <div className="flex flex-col h-1/2 overflow-hidden gap-2 mt-2 rounded-xl">
          <Link
            href={`/activity/${session?.user.nickname}`}
            className="flex gap-2 hover:text-orange-500"
          >
            <div className="font-bold text-4xl">나만의 문제집</div>
            <div className="flex flex-col justify-end">
              나만의 문제집을 생성해보세요!
            </div>
          </Link>
          {session && session.user ? (
            <WorkbookTable
              isLoading={personalWbLoading}
              workbooks={personalWorkbook?.workbooks || []}
            />
          ) : (
            <>
              <div className="mt-10 flex flex-col items-center h-full font-semibold">
                로그인 후 이용 가능한 기능입니다. <br />
                더욱 많은 기능을 이용해 보세요!
                <Link
                  href="/login"
                  className="mt-2 bg-indigo-500 py-2 px-3 rounded-lg text-white"
                >
                  로그인
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
