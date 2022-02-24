import { render, screen } from '@testing-library/react';
import EmptyContactsMessage from '../EmptyContactsMessage';
import '@testing-library/jest-dom/extend-expect';

describe('EmptyContactsMessage', () => {
  it('renders on screen correctly', () => {
    render(<EmptyContactsMessage />);

    const textElement = screen.getByText('Contacts list is empty!');
    expect(textElement).toBeInTheDocument();
  });
});
