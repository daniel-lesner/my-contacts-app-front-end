import { fireEvent, render, screen } from '@testing-library/react';
import ContactCard from '../ContactCard';
import '@testing-library/jest-dom/extend-expect';

const mockContact = {
  firstName: 'First',
  lastName: 'Last',
  phoneNumber: '0712345678',
};

const mockedRemoveContact = jest.fn();
const mockedOpenContact = jest.fn();

describe('ContactCard', () => {
  it('renders user name correctly', () => {
    render(<ContactCard contactInfo={mockContact} />);

    const divElement = screen.getByText(/First Last/i);
    expect(divElement).toBeInTheDocument();
  });

  it('renders user phone number correctly', () => {
    render(<ContactCard contactInfo={mockContact} />);

    const divElement = screen.getByText('0712345678');
    expect(divElement).toBeInTheDocument();
  });

  it('renders open button correctly and respons to click', () => {
    render(
      <ContactCard contactInfo={mockContact} openContact={mockedOpenContact} />
    );

    const openDivElement = screen.getByText(/open/i);
    fireEvent.click(openDivElement);
    expect(mockedOpenContact).toBeCalledTimes(1);
  });

  it('renders open icon correctly', () => {
    render(<ContactCard contactInfo={mockContact} />);

    const openIconElement = screen.getByTestId('OpenInFullIcon');
    expect(openIconElement).toBeInTheDocument();
  });

  it('renders remove icon correctly', () => {
    render(<ContactCard contactInfo={mockContact} />);

    const removeIconElement = screen.getByTestId('ClearIcon');
    expect(removeIconElement).toBeInTheDocument();
  });
});
