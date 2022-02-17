import { Header } from '@/components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout(props: MainLayoutProps): JSX.Element {
  return (
    <>
      <Header />

      <main>{props.children}</main>
    </>
  );
}
