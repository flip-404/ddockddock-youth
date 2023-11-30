'use client'

import { useRouter } from 'next/navigation'

const MockData = [
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
]

export default function InterviewTable() {
  const router = useRouter()
  const interviewId = 'id'

  return (
    <table className="w-full">
      <thead className="table w-full">
        <tr>
          <th className="w-1/6">번호</th>
          <th className="w-2/6">제목</th>
          <th className="w-1/6">글쓴이</th>
          <th className="w-1/6">날짜</th>
          <th className="w-1/6">조회 수</th>
        </tr>
      </thead>
      <tbody className="block max-h-96 overflow-y-scroll hide-scrollbar">
        {MockData.map((data, idx) => {
          if (idx > 29) return null
          return (
            <tr className="table w-full">
              <td className="text-center w-1/6">{idx + 1}</td>
              <td
                className="w-2/6 cursor-pointer hover:underline decoration-2 underline-offset-2"
                onClick={() => router.push(`/interview/mine/${interviewId}`)}
              >
                {data.title}
              </td>
              <td
                className="w-1/6 cursor-pointer hover:underline decoration-2 underline-offset-2"
                onClick={() => router.push(`/interview/mine`)}
              >
                {data.author}
              </td>
              <td className="w-1/6 ">{data.createdDate}</td>
              <td className="w-1/6">{data.views}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
