import { render, screen } from '@testing-library/react';

import IndexPage from '@/pages/index';

describe('Tests to IndexPage component', () => {
  it('Takes a Snapshot of the `IndexPage` component', () => {
    const { container } = render(<IndexPage />);

    expect(container).toMatchSnapshot();
  });

  it('Renders initial JSX from `IndexPage` component', () => {
    render(<IndexPage />);

    const heading = screen.getByRole('heading', { name: /hello world/i });

    expect(heading).toBeInTheDocument();
  });
});
