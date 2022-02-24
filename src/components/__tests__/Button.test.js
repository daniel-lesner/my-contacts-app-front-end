import { fireEvent, render, screen } from '@testing-library/react';
import { hexToRgb, rgbToHex } from '@mui/material';
import Button from '../Button';
import '@testing-library/jest-dom/extend-expect';
import configData from '../../config.js';

const mockedOnClick = jest.fn();

describe('Button', () => {
  it('renders button correctly', () => {
    render(<Button>test</Button>);

    const buttonElement = screen.getByRole('button', { name: 'test' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('button reacts to click', () => {
    render(<Button onClick={mockedOnClick}>test</Button>);

    const buttonElement = screen.getByRole('button', { name: 'test' });
    fireEvent.click(buttonElement);
    expect(mockedOnClick).toBeCalledTimes(1);
  });

  it('renders button`s default color correctly', () => {
    render(
      <Button onClick={mockedOnClick} color={configData.THEME_COLORS.PRIMARY}>
        test
      </Button>
    );

    const buttonElement = screen.getByRole('button', { name: 'test' });

    const style = window.getComputedStyle(buttonElement);
    expect(style.backgroundColor).toBe(
      hexToRgb(configData.THEME_COLORS.PRIMARY)
    );
  });

  it('renders button`s selected color correctly', () => {
    render(
      <Button onClick={mockedOnClick} color={'rgb(20, 40, 60)'}>
        test
      </Button>
    );

    const buttonElement = screen.getByRole('button', { name: 'test' });

    const style = window.getComputedStyle(buttonElement);
    expect(style.backgroundColor).toBe('rgb(20, 40, 60)');
  });
});
