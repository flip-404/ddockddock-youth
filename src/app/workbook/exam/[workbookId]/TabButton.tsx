import React from 'react'
import cls from '@/app/utils/cls'

type TabButtonProps = {
  tabType: number
  currentTabType: number
  onClick: (type: number) => void
  label: string
}

const TabButton = ({
  tabType,
  currentTabType,
  onClick,
  label,
}: TabButtonProps) => {
  return (
    <button
      className={cls(
        currentTabType === tabType ? 'bg-sky-600' : 'hover:bg-sky-500',
        'py-2 px-2 text-white cursor-pointer',
      )}
      onClick={() => onClick(tabType)}
    >
      {label}
    </button>
  )
}

export default TabButton
