import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';
import movies from '@/mock/dummy.json';
import MovieItem from '@/components/movie-item';

export default function Home() {
  return (
    <div className={style.container}>
      <h3>지금 가장 추천하는 영화</h3>
      <section className={style.recommendtab}>
        {movies.map((movie) => (
          <MovieItem tabState='bigTile' key={movie.id} {...movie} />
        ))}
        {/* {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))} */}
      </section>
      <h3>등록된 모든 영화</h3>
      <section className={style.alltab}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
        {/* {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))} */}
      </section>
    </div>
  );
}

// Home 컴포넌트에 저장이 된 getLayout 메서드는
// 페이지라는 매개변수로 현재의 페이지 역할을 할 컴포넌트를 받아와서
// return문 내부 태그의 레이아웃으로 감싸진 형태의 페이지를 반환
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
