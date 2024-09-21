import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  const { id } = router.query;

  return <div>Book {id}</div>;
}

// [id] = 단일 쿼리에 대응하는 페이지
// ex) /book/123

// [...id] = Catch All Segment
// ex) /book/123/456/789
// /로 구분되는 모든 구간을 대응하는 페이지

// [[...id]] = Optional Catch All Segment
// ex) /book
// 쿼리가 없는 경로에도 대응하는 범용적인 페이지
