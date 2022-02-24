import { fireEvent, render, screen } from '@testing-library/react';
import ContactInfo from '../ContactInfo';
import '@testing-library/jest-dom/extend-expect';

const mockContact = {
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

const mockedEditContact = jest.fn();
let mockedIsEdithModeOn = false;
const mockedSetEditModeOn = jest.fn(() => (mockedIsEdithModeOn = true));

describe('ContactInfo', () => {
  it('renders user phone number correctly', () => {
    render(<ContactInfo object={mockContact} />);

    const divElement = screen.getByText('0712345678');
    expect(divElement).toBeInTheDocument();
  });

  it('renders user age correctly', () => {
    render(<ContactInfo object={mockContact} />);

    const divElement = screen.getByText('28');
    expect(divElement).toBeInTheDocument();
  });

  it('renders user email correctly', () => {
    render(<ContactInfo object={mockContact} />);

    const divElement = screen.getByText('test@test.com');
    expect(divElement).toBeInTheDocument();
  });

  it('renders edit button correctly', () => {
    render(<ContactInfo object={mockContact} />);

    const buttonElement = screen.getByRole('button', { name: 'Edit' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls edit function on button click', () => {
    render(
      <ContactInfo object={mockContact} setEditModeOn={mockedSetEditModeOn} />
    );

    const buttonElement = screen.getByRole('button', { name: 'Edit' });
    fireEvent.click(buttonElement);
    expect(mockedSetEditModeOn).toBeCalledTimes(1);
  });
});
