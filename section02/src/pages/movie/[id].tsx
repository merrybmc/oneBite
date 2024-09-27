import { useRouter } from 'next/router';

export default function Page({
  id,
  title,
  releaseDate,
  company,
  genres,
  subTitle,
  description,
  runtime,
  posterImgUrl,
}) {
  const router = useRouter();

  const { id } = router.query;
  return <div>{id} 영화 상세페이지</div>;
}
