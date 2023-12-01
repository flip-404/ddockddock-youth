'use client'

import { useState } from 'react'

type Problem = {
  question: string
  answer: string
}

type WorkBook = {
  title: string
  description: string
  problems: Problem[]
}

export default function WriteHome() {
  const [workBook, setWorkBook] = useState<WorkBook>({
    title: '',
    description: '',
    problems: [
      {
        question: '',
        answer: '',
      },
    ],
  })

  const onClickAddButton = () => {
    setWorkBook((prevWorkBook) => {
      const newProblems = [
        ...prevWorkBook.problems,
        { question: '', answer: '' },
      ]

      return {
        ...prevWorkBook,
        problems: newProblems,
      }
    })
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
          onClick={onClickAddButton}
        >
          생성
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-4 overflow-y-scroll ">
        <div className="flex flex-col gap-2 p-4 bg-slate-300 rounded-2xl">
          <span className="flex font-semibold">제목</span>
          <input className="p-3" placeholder="문제집의 제목을 적어주세요" />
          <span className="flex font-semibold">설명</span>
          <input
            className="p-3"
            placeholder="문제집에 대한 간략한 설명을 적어주세요"
          />
        </div>
        {workBook.problems.map((problem, idx) => (
          <div className="flex flex-col gap-2 p-4 bg-slate-300 rounded-2xl">
            <span className="flex font-semibold">질문 {idx + 1}</span>
            <input
              className="p-3"
              placeholder="ex) 최근 마주했던 가장 어려웠던 도전은?"
            />
            <span className="flex font-semibold">답변 {idx + 1}</span>
            <textarea
              className="p-3"
              placeholder="질문에 대한 답변을 작성해 주세요"
            />
          </div>
        ))}
        <button
          type="button"
          className="rounded-2xl bg-sky-400 hover:bg-sky-500 text-white font-semibold py-4 px-6 "
          onClick={onClickAddButton}
        >
          질문 추가
        </button>
      </div>
    </div>
  )
}
