'use client'

import fetcher from '@/app/libs/server/fetcher'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const MockData1 = [
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

const user = {
  id: 'mine',
}

export default function InterviewHome() {
  const { data: session } = useSession()

  return (
    <div className="flex gap-7 flex-col w-full h-full">
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
      <Link href="/interview" className="flex gap-2 hover:text-orange-500">
        <div className="font-bold text-4xl">공유 문제집</div>
        <div className="flex flex-col justify-end">
          누군가 정성껏 제작한 문제집을 풀어보세요!
        </div>
      </Link>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>날짜</th>
            <th>조회 수</th>
          </tr>
        </thead>
        <tbody>
          {MockData1.map((mockdata, idx) => (
            <tr className="cursor-pointer hover:text-amber-400" key={idx}>
              <td>1</td>
              <td>{mockdata.title}</td>
              <td>{mockdata.author}</td>
              <td>{mockdata.createdDate}</td>
              <td>{mockdata.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        href={`/interview/${user.id}`}
        className="flex gap-2 hover:text-orange-500"
      >
        <div className="font-bold text-4xl">나만의 문제집</div>
        <div className="flex flex-col justify-end">
          나만의 문제집을 생성해보세요!
        </div>
      </Link>
      {session && session.user ? (
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>날짜</th>
              <th>조회 수</th>
            </tr>
          </thead>
          <tbody>
            {MockData1.map((mockdata, idx) => (
              <tr className="cursor-pointer hover:text-amber-400" key={idx}>
                <td>1</td>
                <td>{mockdata.title}</td>
                <td>{mockdata.author}</td>
                <td>{mockdata.createdDate}</td>
                <td>{mockdata.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  )
}
