import { v4 as uuidv4 } from 'uuid';

import { LinkTo } from '@/components/LinkTo';

interface Route {
  id: string;
  path: string;
  text: string;
}

const routeList: Route[] = [
  { id: uuidv4(), path: '/products', text: 'Products' },
  { id: uuidv4(), path: '/sell', text: 'Sell' },
  { id: uuidv4(), path: '/orders', text: 'Orders' },
  { id: uuidv4(), path: '/account', text: 'Account' },
];

export function Nav(): JSX.Element {
  return (
    <nav>
      <ul>
        {routeList.map((route) => (
          <li key={route.id}>
            <LinkTo href={route.path}>{route.text}</LinkTo>
          </li>
        ))}
      </ul>
    </nav>
  );
}
