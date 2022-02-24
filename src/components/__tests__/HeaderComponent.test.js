import { render, screen } from '@testing-library/react';
import HeaderComponent from '../HeaderComponent';
import '@testing-library/jest-dom/extend-expect';

describe('HeaderComponent', () => {
  it('renders header and its title correctly', () => {
    render(<HeaderComponent title="test" />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveTextContent('test');
  });
});
