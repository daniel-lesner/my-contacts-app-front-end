import React, {
  MouseEventHandler,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

declare module '@emotion/react' {
  // eslint-disable-next-line no-unused-vars
  interface Theme {
    color: string;
  }
}

const Button = styled.button`
  margin: 4vw 8vw;
  padding: 1vw 4vw;
  font-size: 2vw;
  background-color: ${(props) => props.theme.color};
  cursor: pointer;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
`;

type ButtonComponentProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
  children?:
  | boolean
  | ReactChild
  | ReactFragment
  | ReactPortal
  | null
  | undefined,
  color: string,
}

const ButtonComponent = ({ onClick, children, color }: ButtonComponentProps) => {
  const theme = { color };

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={onClick}>{children}</Button>
    </ThemeProvider>
  );
};

ButtonComponent.defaultProps = {
  onClick: undefined,
  children: undefined,
};

export default ButtonComponent;
