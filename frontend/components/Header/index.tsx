import { LinkTo } from '@/components/LinkTo';
import { Nav } from '@/components/Nav';

export function Header(): JSX.Element {
  return (
    <header>
      <section>
        <LinkTo href="/">Sick Fits</LinkTo>
      </section>

      <section>
        <p>Search</p>
      </section>

      <Nav />
    </header>
  );
}
