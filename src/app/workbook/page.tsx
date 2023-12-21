'use client'

import fetcher from '@/app/libs/server/fetcher'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import useSWR from 'swr'
import WorkbookTable from '../components/workbookTable'
import { useEffect } from 'react'
import BackButton from '../components/backButton'

export default function Workbooks() {
  const { data: publicWorkbook, isLoading: publicWbLoading } = useSWR(
    '/api/workbook',
    async (url: string) => {
      const response = await fetch(url)
      const data = await response.json()
      return data
    },
  )

  return (
    <div className="flex gap-7 flex-col w-full h-full">
      <BackButton />
      <div className="flex"></div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col h-1/2 overflow-hidden gap-2 mt-2 rounded-xl">
          <Link href="/interview" className="flex gap-2 hover:text-orange-500">
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
      </div>
    </div>
  )
}
