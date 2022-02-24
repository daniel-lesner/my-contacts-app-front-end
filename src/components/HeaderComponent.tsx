import React from 'react';
import styled from '@emotion/styled';
import configData from '../config.js';

const Header = styled.header`
  padding: 2.5vh 0;
  font-size: max(4vw, 4vh);
  font-weight: bold;
  color: white;
  background-color: ${configData.THEME_COLORS.PRIMARY};
  text-align: center;
`;

type THeaderComponentProps = {
  title: string;
};

const HeaderComponent = ({ title }: THeaderComponentProps) => (
  <Header>{title}</Header>
);

export default HeaderComponent;
