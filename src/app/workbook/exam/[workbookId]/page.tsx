'use client'

import useSWR from 'swr'
import type { Workbook } from '@/types/types'
import { useEffect, useState } from 'react'
import cls from '@/app/utils/cls'
import TabButton from './TabButton'
import Comment from './Comment'
import BackButton from '@/app/components/backButton'

const ANSWER = 0
const AI_ANSWER = 1
const COMMENT = 2

type TabType = 0 | 1 | 2

type Tab = {
  type: TabType
  isOpen: boolean
}

type ExamProps = {
  params: { workbookId: number }
}

export default function Exam({ params: { workbookId } }: ExamProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [tab, setTab] = useState<Tab>({ type: ANSWER, isOpen: false })

  const url = workbookId ? `/api/workbook?workbookId=${workbookId}` : null

  const { data: { workbook } = { workbook: null }, isLoading } = useSWR(
    url,
    async (url: string) => {
      const response = await fetch(url)
      const data = await response.json()
      return data as { workbook: Workbook }
    },
  )

  const handdlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  const handdleNext = () => {
    if (workbook && currentIndex < workbook.problems.length - 1)
      setCurrentIndex(currentIndex + 1)
  }

  const handdleTabClick = (tabType: 0 | 1 | 2) => {
    setTab({ type: tabType, isOpen: false })
  }

  useEffect(() => {
    console.log('currentIndex:', currentIndex)
  }, [currentIndex])

  if (workbook)
    return (
      <div className="flex flex-col items-center gap-3 py-4 w-full h-full">
        <BackButton />
        <p className="text-2xl font-semibold">
          {currentIndex + 1}. {workbook.problems[currentIndex].question}
        </p>
        <textarea
          className="w-3/4 h-1/5 p-2 rounded border-solid border-2	border-blue-600	"
          placeholder="의견을 입력하세요."
        />
        <div className="flex w-3/4 rounded-md">
          <div className="flex rounded-md font-medium items-center bg-sky-400 overflow-hidden">
            <TabButton
              tabType={ANSWER}
              currentTabType={tab.type}
              onClick={handdleTabClick}
              label="답변 보기"
            />
            <TabButton
              tabType={AI_ANSWER}
              currentTabType={tab.type}
              onClick={handdleTabClick}
              label="AI가 분석한 내 답변 (준비중)"
            />
            <TabButton
              tabType={COMMENT}
              currentTabType={tab.type}
              onClick={handdleTabClick}
              label="댓글"
            />
          </div>
        </div>
        {tab.type === COMMENT ? (
          <div className="flex w-3/4 h-2/5 overflow-y-scroll">
            <Comment />
          </div>
        ) : (
          <div className="flex w-3/4 h-2/5 overflow-y-scroll">
            {workbook.problems[currentIndex].answer}
          </div>
        )}
        <div className="flex gap-20">
          <button
            type="button"
            className={cls(
              currentIndex === 0
                ? 'bg-slate-300'
                : 'bg-indigo-400 hover:bg-indigo-500',
              'rounded  text-white font-semibold py-4 px-6',
            )}
            disabled={currentIndex === 0}
            onClick={handdlePrev}
          >
            이전 문제
          </button>
          <button
            type="button"
            className={cls(
              currentIndex === workbook.problems.length - 1
                ? 'bg-slate-300'
                : 'bg-emerald-400 hover:bg-emerald-500',
              'rounded  text-white font-semibold py-4 px-6 ',
            )}
            disabled={currentIndex === workbook.problems.length - 1}
            onClick={handdleNext}
          >
            다음 문제
          </button>
        </div>
      </div>
    )
}
