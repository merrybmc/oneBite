import SearchableLayout from '@/components/searchable-layout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import movies from '@/mock/dummy.json';
import BookItem from '@/components/book-item';
import MovieItem from '@/components/movie-item';
import style from './index.module.css';
export default function Page() {
  const router = useRouter();
  const { q } = router.query;
  // return <div>검색 결과 : {q}</div>;

  return (
    <div className={style.search}>
      {movies.map((movies) => (
        <MovieItem key={movies.id} {...movies} tabState='bigTile' />
      ))}
      {/* {books.map((books) => (
        <BookItem key={books.id} {...books} />
      ))} */}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
