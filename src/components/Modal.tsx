'use client'

import { useRouter } from 'next/navigation'

type ModalProps = {
  onClose: () => void
  type: string | null
  desc: string | null
}

export default function Modal({ onClose, type, desc }: ModalProps) {
  const router = useRouter()

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen opacity-50 bg-slate-700 z-10" />
      <div className="flex flex-col gap-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-slate-50 px-5 py-3 rounded-3xl shadow-2xl">
        <div className="flex justify-between">
          <p className="flex text-lg font-semibold">{desc} 풀기</p>
          <button
            className="flex text-lg font-semibold"
            type="button"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            {desc} 풀기를 선택하셨습니다. <br /> 문제풀이 방식을 정해주세요!
          </p>

          <div>
            <p>
              <span className="text-indigo-400">자습서</span>: 문제마다 정답을
              볼 수 있어요.
            </p>
            <p>
              <span className="text-emerald-400">실전 테스트</span>: 모든 문제
              풀이 후 정답을 볼 수 있어요.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly">
          <button
            type="button"
            className="rounded bg bg-indigo-400 text-white font-semibold py-4 px-6 hover:bg-indigo-500"
            onClick={() => router.push('/interview/mine/id/test')}
          >
            자습서
          </button>
          <button
            type="button"
            className="rounded bg-emerald-400 text-white font-semibold py-4 px-6 hover:bg-emerald-500"
            onClick={() => router.push('/interview/mine/id/test')}
          >
            실전 테스트
          </button>
        </div>
        <div />
      </div>
    </>
  )
}
