'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Modal from '@/app/components/modal'
import useSWR from 'swr'
import type { Workbook } from '@/types/types'
import { formatDate } from '@/app/utils/formatData'
import BackButton from '@/app/components/backButton'
import { useSession } from 'next-auth/react'
import BookmarkIcon from '@/app/assets/bookmark_icon'

type ModalState = {
  isOpen: boolean
  type: string | null
  desc: string | null
}

type WorkbookInfoProps = {
  params: { workbookId: string }
}

export default function WorkbookInfo({
  params: { workbookId },
}: WorkbookInfoProps) {
  const { data: session } = useSession()
  const bookmarkUrl = session
    ? `/api/bookmark?userId=${session.user.id}&workbookId=${workbookId}`
    : null
  const workbookUrl = workbookId
    ? `/api/workbook?workbookId=${workbookId}`
    : null
  const router = useRouter()

  const { data: { isBookmarked } = { isBookmarked: null } } = useSWR(
    bookmarkUrl,
    async (url: string) => {
      const response = await fetch(url)
      const data = await response.json()
      return data
    },
  )
  console.log('isBookmarked', isBookmarked)

  const { data: { workbook } = { workbook: null } } = useSWR(
    workbookUrl,
    async (url: string) => {
      const response = await fetch(url)
      const data = await response.json()
      return data as { workbook: Workbook }
    },
  )

  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    type: null,
    desc: null,
  })

  // 북마크 기능 노마드 참고
  const handdleBookmark = async () => {
    const response = await fetch('/api/bookmark', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: session?.user,
        workbook,
      }),
    })
    const res = await response.json()
    console.log('response', res)
  }

  const handdleOnModal = (type: string, desc: string) => {
    setModalState({ isOpen: true, type, desc })
  }

  const handdleOffModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      desc: null,
    })
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full h-full relative">
      <BackButton />
      <div className="flex justify-evenly gap-3">
        <Image
          src="/FrontEnd_Img.jpg"
          alt="FrontEnd Image"
          width={800}
          height={800}
          className="w-1/3 rounded"
        />
        <div className="flex flex-col justify-evenly gap-2 text-left ">
          <div className="flex justify-between items-center">
            <div>
              <span>개발 · 프로그래밍</span> <span>{'>'} 프론트엔드</span>
            </div>
            <button
              onClick={handdleBookmark}
              className="flex gap-1 text-xs p-1 border-2 rounded border-yellow-400 cursor-pointer hover:bg-yellow-400 hover:text-white"
            >
              즐겨찾기
              <BookmarkIcon
                color={isBookmarked ? '#FACC15' : '#eeeeee'}
                width={15}
                height={15}
              />
            </button>
          </div>
          <h1 className="text-3xl font-bold">{workbook?.title}</h1>
          <div>{workbook?.description}</div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                router.push(`/activity/${workbook?.author.nickname}`)
              }}
              className="bg-fuchsia-400 text-white rounded px-2 font-semibold cursor-pointer"
            >
              작성: {workbook?.author.nickname}
            </button>
            <div>총 {workbook?.problems.length}문제</div>
            <div>{formatDate(workbook?.createdAt!)} 작성</div>
          </div>
        </div>
      </div>
      <div className="flex gap-20">
        <button
          type="button"
          className="rounded bg-indigo-400 text-white font-semibold py-4 px-6 hover:bg-indigo-500"
          onClick={() => handdleOnModal('SEQUENCE', '순서대로')}
        >
          순서대로 풀기
        </button>
        <button
          type="button"
          className="rounded bg-emerald-400 text-white font-semibold py-4 px-6 hover:bg-emerald-500"
          // onClick={() => router.push('/interview/mine/id/test')}
          onClick={() => handdleOnModal('RANDOM', '무작위로')}
        >
          무작위로 풀기
        </button>
      </div>
      {modalState.isOpen && (
        <Modal
          type={modalState.type}
          desc={modalState.desc}
          onClose={handdleOffModal}
          workbookId={+workbookId}
        />
      )}
    </div>
  )
}
