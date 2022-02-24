import React from 'react';
import styled from '@emotion/styled';

const Form = styled.div`
  display: flex;
  flex-orientation: row;
  display: grid;
  place-content: center;
  margin: 0.8em;
  font-size: 0.8em;
  text-align: left;
`;

const Label = styled.label`
width: 100%;
  margin-bottom: 0.4rem;
  font-size: 1.5em;
`;

const Input = styled.input`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1;
  border: none;
  border-radius: 3px;
`;

type FormBoxProps = {
  name: string;
  text: string;
  value?: string;
  formValue?: string | number | Array<string>;
};

const FormBox = ({
  name, text, value, formValue,
}: FormBoxProps) => (
  <Form>
    <Label htmlFor={name}>
      {text}
      :
    </Label>
    <Input
      type={value}
      name={name}
      id={name}
      defaultValue={formValue && formValue}
    />
  </Form>
);

FormBox.defaultProps = {
  value: 'value',
  formValue: undefined,
};

export default FormBox;
