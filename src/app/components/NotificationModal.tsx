import { useRouter } from 'next/navigation'

export default function NotificationModal({
  label,
  onClose,
}: {
  label: string
  onClose: () => void
}) {
  const router = useRouter()

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen opacity-50 bg-slate-700 z-10" />
      <div className="flex flex-col gap-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-slate-50 px-5 py-3 rounded-3xl shadow-2xl">
        <div className="flex flex-col justify-center items-center gap-5 p-4">
          <p className="flex text-lg font-semibold">{label}</p>
          <button
            onClick={onClose}
            className="hover:bg-slate-300 hover:text-white rounded py-1 px-2"
            type="button"
          >
            닫기
          </button>
        </div>
      </div>
    </>
  )
}
