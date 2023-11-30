'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function InterviewWorkBook() {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
      <div className="flex justify-evenly gap-3">
        <Image
          src="/FrontEnd_Img.jpg"
          alt="FrontEnd Image"
          width={800}
          height={800}
          className="w-1/3 rounded"
        />
        <div className="flex flex-col justify-evenly gap-2 text-left ">
          <div className="flex justify-between">
            <div>
              <span>개발 · 프로그래밍</span> <span>{'>'} 프론트엔드</span>
            </div>
            <div>즐겨찾기</div>
          </div>
          <h1 className="text-3xl font-bold">[프론트엔드 기술 면접] 마녀</h1>
          <div>
            전반적인 프론트엔드 기술에 대한 질문과 그에 대한 답변을 모았습니다.
          </div>
          <div className="flex gap-3">
            <div className="bg-fuchsia-400 text-white rounded px-2 font-semibold cursor-pointer">
              작성: 마녀
            </div>
            <div>총 18문제</div>
            <div>2023.11.30 작성</div>
            <div>302 추천</div>
          </div>
        </div>
      </div>
      <div className="flex gap-20">
        <button
          type="button"
          className="rounded bg-indigo-400 text-white font-semibold py-4 px-6 hover:bg-indigo-500"
          onClick={() => router.push('/interview/mine/id/test')}
          // onClick으로 라우팅보단.. SPA로 만드는게 나을듯, 나중에 고려
        >
          순서대로 풀기
        </button>
        <button
          type="button"
          className="rounded bg-emerald-400 text-white font-semibold py-4 px-6 hover:bg-emerald-500"
          onClick={() => router.push('/interview/mine/id/test')}
        >
          무작위로 풀기
        </button>
      </div>
    </div>
  )
}
