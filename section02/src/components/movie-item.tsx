import { useRouter } from 'next/router';
import style from './movie-item.module.css';

export default function MovieItem({
  id,
  title,
  releaseDate,
  company,
  genres,
  subTitle,
  description,
  runtime,
  posterImgUrl,
  tabState,
}) {
  const router = useRouter();

  const onNavigateMovieDetail = () => {
    router.push(`/movie/${id}`);
  };
  return (
    <div>
      <img
        onClick={onNavigateMovieDetail}
        className={style.movieimg}
        src={posterImgUrl}
        style={
          tabState === 'bigTile'
            ? { width: '250px', height: '400px' }
            : { width: '140px', height: '220px' }
        }
      />
    </div>
  );
}
