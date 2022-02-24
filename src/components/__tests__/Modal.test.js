import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal';
import '@testing-library/jest-dom/extend-expect';

const mockContactData = [
  {
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
  },
];

const mockTags = [];
const mockedSetTags = jest.fn();

describe('Modal', () => {
  it('renders modal variant for adding new contact', () => {
    render(
      <Modal
        contactData={mockContactData}
        state="new"
        tags={mockTags}
        setTags={mockedSetTags}
      />
    );

    const buttonElement = screen.getByRole('button', { name: 'Submit' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders modal variant for showing existent contact', () => {
    render(
      <Modal
        contactData={mockContactData}
        state={1}
        tags={mockTags}
        setTags={mockedSetTags}
      />
    );

    const buttonElement = screen.getByRole('button', { name: 'Edit' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders modal variant for editing contact', async () => {
    render(
      <Modal
        contactData={mockContactData}
        state={1}
        tags={mockTags}
        setTags={mockedSetTags}
      />
    );

    const buttonElement = screen.getByRole('button', { name: 'Edit' });
    fireEvent.click(buttonElement);
    expect(buttonElement).not.toBeInTheDocument();
  });
});
