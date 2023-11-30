import Link from 'next/link'
import InterviewTable from '../InterviewTable'

// 현재 mine 이지만, 벨로그처럼 유저아이디로 접근가능하도록 만들어야 한다.

export default function Mine() {
  return (
    <div className="flex flex-col justify-center gap-7 w-full h-full">
      <div className="flex justify-between gap-2">
        <div className="flex items-center font-bold text-4xl">
          <span className="text-blue-500">[MINE]</span>님이 제작한 문제집
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
      </div>
    </div>
  )
}
