import { fireEvent, render, screen } from '@testing-library/react';
import FormBox from '../FormBox';
import '@testing-library/jest-dom/extend-expect';

describe('FormBox', () => {
  it('renders input element correctly', () => {
    render(
      <FormBox
        name="testname"
        text="testtext"
        value="testvalue"
        formValue="testformvalue"
      />
    );

    const inputElement = screen.getByRole('textbox', { name: /testtext:/i });
    expect(inputElement).toBeInTheDocument();
  });

  it('changes input value', () => {
    render(
      <FormBox
        name="testname"
        text="testtext"
        value="testvalue"
        formValue="testformvalue"
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {
      target: {
        value: 'value has changed',
      },
    });
    expect(inputElement).toHaveValue('value has changed');
  });
});
