import Link from 'next/link'
import InterviewTable from './InterviewTable'

export default function Interview() {
  return (
    <div className="flex flex-col justify-center gap-7 w-full h-full">
      <Link href="/interview" className="flex gap-2 hover:text-orange-500">
        <div className="font-bold text-4xl">공유 문제집</div>
        <div className="flex flex-col justify-end">
          누군가 정성껏 제작한 문제집을 풀어보세요!
        </div>
      </Link>
      <div>
        <InterviewTable />
      </div>
    </div>
  )
}
