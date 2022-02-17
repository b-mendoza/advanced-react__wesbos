import { globalStyles } from '@/styles/globals';

import 'normalize.css';

import type { AppProps } from 'next/app';

import { MainLayout } from '@/components/Layouts/MainLayout';

export default function _App(props: AppProps): JSX.Element {
  globalStyles();

  return (
    <MainLayout>
      <props.Component {...props.pageProps} />
    </MainLayout>
  );
}
