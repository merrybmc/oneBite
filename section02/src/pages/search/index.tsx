import SearchableLayout from '@/components/searchable-layout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import movies from '@/mock/dummy.json';
import BookItem from '@/components/book-item';
import MovieItem from '@/components/movie-item';
import style from './index.module.css';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // context
  // 브라우저로부터 받은 요청에 대한 모든 정보 포함 (query 포함)

  const { q } = context.query;

  const books = await fetchBooks(q as string);
  return {
    props: { books },
  };
};
export default function Page({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { q } = router.query;
  console.log('q', q);
  // return <div>검색 결과 : {q}</div>;

  return (
    <div className={style.search}>
      {/* {movies.map((movies) => (
        <MovieItem key={movies.id} {...movies} tabState='bigTile' />
      ))} */}
      {books.map((books) => (
        <BookItem key={books.id} {...books} />
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
