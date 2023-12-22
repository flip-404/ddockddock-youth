import React, { ChangeEvent, useState } from 'react'

const CommentSection = ({}) => {
  const comments = [
    { id: 0, text: '냠냠', user: '고양이', createAt: '2023.12.20' },
    { id: 1, text: '냠ㄴㄴㄴ냠ㄴㄴ', user: '고양이', createAt: '2023.12.20' },
    { id: 2, text: '냠냠ㅁㄴㅇㅁㄴㅇ', user: '고양이', createAt: '2023.12.20' },
    { id: 3, text: 'ㄴㅁㅇㅁㄴㅇ냠냠', user: '고양이', createAt: '2023.12.20' },
    { id: 4, text: '냠냠ㅁㄴㅇㅁㄴㅇ', user: '고양이', createAt: '2023.12.20' },
    { id: 5, text: '냠ㅁㄴㅇㅁㄴㅇ냠', user: '고양이', createAt: '2023.12.20' },
    { id: 6, text: 'ㄴㅁㅇ123냠냠', user: '고양이', createAt: '2023.12.20' },
    { id: 7, text: '냠냠', user: '고양이', createAt: '2023.12.20' },
  ]
  const [newComment, setNewComment] = useState('')

  const handleCommentChange = (e: any) => {
    setNewComment(e.target.value)
  }

  const handleAddComment = () => {
    // 여기에서 서버에 새로운 댓글을 저장하는 로직을 추가해야 합니다.
    // 새로운 댓글을 저장한 후, comments 상태를 업데이트하면 됩니다.
    // 예: setComments([...comments, { id: generateUniqueId(), text: newComment }]);
    setNewComment('')
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
        {comments.map((comment) => (
          <div
            className="flex flex-col border-zinc-500 border-b last:border-b-0 p-2"
            key={comment.id}
          >
            <div className="flex items-center text-xs gap-2">
              <button className="p-1 bg-fuchsia-200 rounded-lg cursor-pointer">
                {comment.user}
              </button>
              {comment.createAt}
            </div>
            <div className="flex py-2">{comment.text}</div>
            <div className="flex gap-3">
              <button className="flex text-xs p-1 border-2 rounded border-sky-400 cursor-pointer hover:bg-sky-400 hover:text-white">
                추천 6
              </button>
              <button className="flex text-xs p-1 border-2 rounded border-red-400 cursor-pointer hover:bg-red-400 hover:text-white">
                비추천 8
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection
