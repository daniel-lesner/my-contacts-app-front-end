import { fireEvent, render, screen } from '@testing-library/react';
import AddressBar from '../AddressBar';
import '@testing-library/jest-dom/extend-expect';

const mockedDisconnectWallet = jest.fn();
const address = '0x1234567890';
const shorthenedAddress = '0x123...890';

describe('AddressBar', () => {
  it('renders disconnect button correctly and disconnectWallet function works on click', () => {
    render(
      <AddressBar account={address} disconnectWallet={mockedDisconnectWallet} />
    );
    const buttonElement = screen.getByRole('button', { name: 'Disconnect' });
    fireEvent.click(buttonElement);
    expect(mockedDisconnectWallet).toBeCalledTimes(1);
  });

  it('renders address correctyly', () => {
    render(
      <AddressBar account={address} disconnectWallet={mockedDisconnectWallet} />
    );
    const textElement = screen.getByText(shorthenedAddress);
    expect(textElement).toBeInTheDocument();
  });
});
