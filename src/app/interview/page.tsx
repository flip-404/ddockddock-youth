const MockData1 = [
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
  {
    title: '나만의 삼성 기출',
    author: '김태성',
    createdDate: '2023.11.29',
    views: '321',
  },
]

export default function Interview() {
  return (
    <div className="flex gap-7 flex-col w-full h-full">
      <div className="flex gap-2">
        <div className="font-bold text-4xl">나만의 문제집</div>
        <div className="flex flex-col justify-end">
          나만의 문제집을 생성해보세요!
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>날짜</th>
            <th>조회 수</th>
          </tr>
        </thead>
        <tbody>
          {MockData1.map((data) => (
            <tr>
              <td>1</td>
              <td>{data.title}</td>
              <td>{data.author}</td>
              <td>{data.createdDate}</td>
              <td>{data.views}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2">
        <div className="font-bold text-4xl">공유 문제집</div>
        <div className="flex flex-col justify-end">
          누군가 정성껏 제작한 문제집을 풀어보세요!
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>날짜</th>
            <th>조회 수</th>
          </tr>
        </thead>
        <tbody>
          {MockData1.map((data) => (
            <tr>
              <td>1</td>
              <td>{data.title}</td>
              <td>{data.author}</td>
              <td>{data.createdDate}</td>
              <td>{data.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
