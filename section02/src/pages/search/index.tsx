import SearchableLayout from '@/components/searchable-layout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';
export default function Page() {
  // const router = useRouter();
  // const { q } = router.query;
  // return <div>검색 결과 : {q}</div>;

  return (
    <div>
      {books.map((books) => (
        <BookItem key={books.id} {...books} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
