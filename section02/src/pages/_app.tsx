import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import GlobalLayout from './../components/global-layout';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  // App Component가 전달받는 props의 타입을 확장
  Component: NextPageWithLayout;
}) {
  const router = useRouter();

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  const onClickButton = () => {
    /* Programmatic Navigation */
    /* 특정 조건이 만족했을 경우 함수 내부에서 페이지를 이동하는 방식 */
    router.push('/test');

    // 뒤로가기를 방지하며 페이지 이동
    // 페이지 이동 내역이 추가되지 않음
    // router.replace('/test');

    // 뒤로 가기
    // router.back();
  };

  useEffect(() => {
    // test 페이지에 대한 preFetching 실행
    router.prefetch('/test');
  }, []);

  return (
    <GlobalLayout>
      {/* Link Navigation */}
      <Link href={'/'}>index</Link>
      &nbsp;
      {/* 해당하는 페이지는 프리패칭 적용하지 않음 */}
      <Link href={'/search'} prefetch={false}>
        search
      </Link>
      &nbsp;
      <Link href={'/book/1'}>book/1</Link>
      <div>
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
