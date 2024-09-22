import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css';
import { ReactNode } from 'react';

export default function Home() {
  return (
    <div>
      <h1 className={style.h1}>ONEBITE CINEMA</h1>
    </div>
  );
}

// Home 컴포넌트에 저장이 된 getLayout 메서드는
// 페이지라는 매개변수로 현재의 페이지 역할을 할 컴포넌트를 받아와서
// return문 내부 태그의 레이아웃으로 감싸진 형태의 페이지를 반환
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
