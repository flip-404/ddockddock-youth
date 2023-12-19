'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

type WorkbookInfo = {
  title: string
  description: string
}

type Problem = {
  question: string
  answer: string
}

export default function WriteHome() {
  const { data: session } = useSession()
  const user = session?.user
  const [workbookInfo, setWorkbookInfo] = useState<WorkbookInfo>({
    title: '',
    description: '',
  })
  const [problems, setProblems] = useState<Problem[]>([
    { question: '', answer: '' },
  ])

  const handleInfoChange = (value: string, type: 'title' | 'description') => {
    const newWorkbookInfo = { ...workbookInfo }
    if (type === 'title') newWorkbookInfo.title = value
    else newWorkbookInfo.description = value
    setWorkbookInfo(newWorkbookInfo)
  }

  const handleProblemChange = (
    value: string,
    index: number,
    type: 'question' | 'answer',
  ) => {
    const newProblems = [...problems]

    if (type === 'question') newProblems[index].question = value
    else newProblems[index].answer = value
    setProblems(newProblems)
  }

  const handdleClickAdd = () => {
    setProblems([...problems, { question: '', answer: '' }])
  }

  const handdleClickCreate = async () => {
    const response = await fetch('/api/workbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user?.id,
        workbookInfo,
      }),
    })

    console.log(response)

    // const {
    //   success,
    //   message,
    //   error: { code },
    // } = await response.json()
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex justify-between px-4">
        <span className="text-3xl font-semibold">
          나만의 면접 문제집 만들기
        </span>
        <button
          type="button"
          className="rounded-2xl bg-purple-500 hover:bg-purple-600 text-white font-semibold py-1 px-2 "
          onClick={handdleClickCreate}
        >
          생성
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-4 overflow-y-scroll ">
        <div className="flex flex-col gap-2 p-4 bg-orange-200 rounded-2xl">
          <span className="flex font-semibold">제목</span>
          <input
            className="p-3"
            placeholder="문제집의 제목을 적어주세요"
            onChange={(e) => handleInfoChange(e.target.value, 'title')}
          />
          <span className="flex font-semibold">설명</span>
          <input
            className="p-3"
            placeholder="문제집에 대한 간략한 설명을 적어주세요"
            onChange={(e) => handleInfoChange(e.target.value, 'description')}
          />
        </div>
        {problems.map((problem, idx) => {
          return (
            <div
              className="flex flex-col gap-2 p-4 bg-slate-300 rounded-2xl"
              key={idx}
            >
              <span className="flex font-semibold">질문 {idx + 1}</span>
              <input
                className="p-3"
                placeholder="ex) 최근 마주했던 가장 어려웠던 도전은?"
                onChange={(e) =>
                  handleProblemChange(e.target.value, idx, 'question')
                }
              />
              <span className="flex font-semibold">답변 {idx + 1}</span>
              <textarea
                className="p-3"
                placeholder="질문에 대한 답변을 작성해 주세요"
                onChange={(e) =>
                  handleProblemChange(e.target.value, idx, 'answer')
                }
              />
            </div>
          )
        })}
        <button
          type="button"
          className="rounded-2xl bg-sky-400 hover:bg-sky-500 text-white font-semibold py-4 px-6 "
          onClick={handdleClickAdd}
        >
          질문 추가
        </button>
      </div>
    </div>
  )
}
