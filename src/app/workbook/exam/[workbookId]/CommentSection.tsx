import React, { ChangeEvent, useEffect, useState } from 'react'
import type { Comment, Problem } from '@/types/types'
import { formatDate } from '@/app/utils/formatData'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

type CommentSectionProps = {
  problem: Problem
  comments: Comment[]
}

const CommentSection = ({ problem }: CommentSectionProps) => {
  const { data: session } = useSession()
  const url = problem ? `/api/comment?problemId=${problem.id}` : null
  const [newComment, setNewComment] = useState('')
  const { data: { comments = [] } = {}, mutate } = useSWR<{
    comments: Comment[]
  }>(url, async (url: string) => {
    const response = await fetch(url)
    return await response.json()
  })

  const handleCommentChange = (e: any) => {
    setNewComment(e.target.value)
  }

  const handleAddComment = async () => {
    setNewComment('')
    const response = await fetch('/api/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: session?.user,
        problem: problem,
        content: newComment,
      }),
    })
    mutate()
  }

  return (
    <div className="flex flex-col w-full py-5">
      <div className="flex flex-col">
        <div className="flex justify-between py-2 px-1 border bg-white ">
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="댓글을 입력하세요."
            className="flex w-10/12 p-2 focus:border-none outline-none"
          />
          <button
            onClick={handleAddComment}
            className="p-2 text-sm rounded text-white bg-slate-500 hover:bg-slate-600"
          >
            댓글 등록
          </button>
        </div>
        {comments?.map((comment) => (
          <div
            className="flex flex-col border-zinc-500 border-b last:border-b-0 p-2"
            key={comment.id}
          >
            <div className="flex items-center text-xs gap-2">
              <button className="p-1 bg-fuchsia-200 rounded-lg cursor-pointer">
                {comment.user?.nickname}
              </button>
              {formatDate(comment.createdAt)}
            </div>
            <div className="flex py-2">{comment.content}</div>
            <div className="flex gap-3">
              <button className="flex text-xs p-1 border-2 rounded border-sky-400 cursor-pointer hover:bg-sky-400 hover:text-white">
                추천 {comment.likes}
              </button>
              <button className="flex text-xs p-1 border-2 rounded border-red-400 cursor-pointer hover:bg-red-400 hover:text-white">
                비추천 {comment.dislikes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection
