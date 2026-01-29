import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from '../../src/components/SearchBox';

describe('SearchBox', () => {
  const renderComponent = () => {
    const onChange = vi.fn();
    render(<SearchBox onChange={onChange} />);

    return {
      input: screen.getByPlaceholderText(/search/i),
      user: userEvent.setup(),
      onChange,
    };
  };

  it('should render an empty search box', () => {
    const { input } = renderComponent();

    expect(input).toBeInTheDocument();
  });

  it('should call onChange when Enter is pressed', async () => {
    const { input, user, onChange } = renderComponent();

    const text = 'Search text';
    await user.type(input, `${text}{enter}`);

    expect(onChange).toBeCalledWith(text);
  });

  it('should not call onChange if input field is empty', async () => {
    const { input, user, onChange } = renderComponent();

    await user.type(input, 'enter');

    expect(onChange).not.toHaveBeenCalled();
  });
});
