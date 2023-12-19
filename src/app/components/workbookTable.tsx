import { useRouter } from 'next/navigation'
import { Workbook, User } from '@prisma/client'
import { formatDate } from '../utils/formatData'

type WorkbookTableProps = {
  workbooks: (Workbook & { author: User })[]
  isLoading: boolean
}

export default function WorkbookTable({
  workbooks,
  isLoading,
}: WorkbookTableProps) {
  const router = useRouter()

  return (
    <table className="w-full bg-indigo-50 rounded-xl">
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
        {!isLoading &&
          workbooks.map((data, idx) => {
            if (idx > 29) return null
            return (
              <tr className="table w-full" key={idx}>
                <td className="text-center w-1/6">{idx + 1}</td>
                <td
                  className="w-2/6 cursor-pointer hover:underline hover:text-indigo-400 decoration-2 underline-offset-2 "
                  // onClick={() => router.push(`/interview/mine/${interviewId}`)}
                >
                  {data.title}
                </td>
                <td
                  className="w-1/6 cursor-pointer hover:underline hover:text-cyan-300 decoration-2 underline-offset-2"
                  onClick={() =>
                    router.push(`/profile/${data.author.nickname}}`)
                  }
                >
                  {data.author.nickname}
                </td>
                <td className="w-1/6 ">{formatDate(data.createdAt)}</td>
                <td className="w-1/6">{3}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
