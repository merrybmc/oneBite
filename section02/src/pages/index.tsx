import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css';
import { ReactNode, useEffect } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';
import movies from '@/mock/dummy.json';
import MovieItem from '@/components/movie-item';
import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';

// SSG 렌더링
export const getStaticProps = async () => {
  console.log('인덱스 페이지');

  const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
};

// SSR 사전 렌더링
// 해당 페이지는 앞으로 SSR로 렌더링
// export const getServerSideProps = async () => {
//   // 페이지 역할을 컴포넌트보다 먼저 실행이 되어서
//   // 해당 컴포넌트에 필요한 데이터를 미리 불러오는 함수
//   // 사전 렌더링을 하는 과정에서 딱 한 번만 실행
//   // 서버 측에서만 실행이 되는 함수

//   // const data = 'Hello';

//   // return {
//   //   props: {
//   //     data,
//   //   },
//   // };

//   // const allBooks = await fetchBooks();
//   // const recoBooks = await fetchRandomBooks();

//   // 병렬로 불러오기
//   const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

//   return {
//     props: {
//       allBooks,
//       recoBooks,
//     },
//   };
// };

// SSR
// InferGetServerSidePropsType
// getServerSideProps 함수의 반환 값의 타입을 자동으로 추론
// export default function Home({
//   allBooks,
//   recoBooks,
// }: InferGetServerSidePropsType<typeof getServerSideProps>)

// SSG
export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    // SSR은 mount가 된 이후 window를 console로 확인 가능
    console.log(window);
    console.log(allBooks);
    console.log(recoBooks);
  }, []);

  return (
    <div className={style.container}>
      {/* <p>{data}</p> */}
      <h3>지금 가장 추천하는 영화</h3>
      <section className={style.recommendtab}>
        {/* {movies.map((movie) => (
          <MovieItem tabState='bigTile' key={movie.id} {...movie} />
        ))} */}
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
        {/* {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))} */}
      </section>
      <h3>등록된 모든 영화</h3>
      <section className={style.alltab}>
        {/* {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))} */}
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
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
