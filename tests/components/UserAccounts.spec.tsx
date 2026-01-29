import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import type { User } from '../../src/entities';

describe('UserAccount', () => {
  it('should render user name', () => {
    const user = { id: 1, name: 'Manolo' } satisfies User;
    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it('should render edit button if user is admin', () => {
    const user = { id: 1, name: 'Manolo', isAdmin: true } satisfies User;
    render(<UserAccount user={user} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it('should not render edit button if user is not admin', () => {
    const user = { id: 1, name: 'Manolo', isAdmin: false } satisfies User;
    render(<UserAccount user={user} />);

    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });
});
