import { useRouter } from 'next/navigation'

function BackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        router.back()
      }}
      className="flex"
    >
      뒤로가기
    </button>
  )
}

export default BackButton
