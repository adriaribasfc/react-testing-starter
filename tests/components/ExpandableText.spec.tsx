import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExpandableText from '../../src/components/ExpandableText';

describe('ExpandableText', () => {
  const limit = 255;
  const text = 'a'.repeat(limit);
  const longText = 'a'.repeat(limit + 1);
  const truncatedText = `${text}...`;

  it(`should render the full text if is not larger than ${limit} characters`, () => {
    render(<ExpandableText text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it(`should truncate text if longer than ${limit} characters`, () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(screen.queryByText(longText)).not.toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/more/i);
  });

  it('should expand the text when Show More button is clicked', async () => {
    render(<ExpandableText text={longText} />);

    const button = screen.getByRole('button');
    const user = userEvent.setup();
    await user.click(button);

    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });

  it('should collapse the text when Show Less button is clicked', async () => {
    render(<ExpandableText text={longText} />);
    const showMoreButton = screen.getByRole('button', { name: /more/i });
    const user = userEvent.setup();
    await user.click(showMoreButton);

    const showLessButton = screen.getByRole('button', { name: /less/i });
    await user.click(showLessButton);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
  });
});
