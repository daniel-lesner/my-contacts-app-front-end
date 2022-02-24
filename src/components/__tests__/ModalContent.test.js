import { fireEvent, render, screen } from '@testing-library/react';
import ModalContent from '../ModalContent';
import '@testing-library/jest-dom/extend-expect';

const mockObject = {
  id: 1,
  firstName: 'First',
  lastName: 'Last',
  phoneNumber: '0712345678',
  email: 'test@test.com',
  age: 28,
  tags: ['test1', 'test2'],
  picture:
    'https://yt3.ggpht.com/ytc/AKedOLRsQ76bfhdY5sLEtGUuukGsWyAvR805WhL40uQz91s=s900-c-k-c0x00ffffff-no-rj',
  link: 'google.com',
};
const mockTags = [];
const mockedSetTags = jest.fn();

describe('ModalContent', () => {
  it('renders modal correctly', () => {
    render(<ModalContent tags={mockTags} setTags={mockedSetTags} />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders contact information correctly inside form', () => {
    render(
      <ModalContent
        object={mockObject}
        tags={mockTags}
        setTags={mockedSetTags}
      />
    );

    const inputElement = screen.getByRole('textbox', { name: 'First Name:' });
    expect(inputElement).toHaveValue('First');
  });
});
