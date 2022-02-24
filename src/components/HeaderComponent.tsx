import React from 'react';
import styled from '@emotion/styled';
import configData from '../config.js';

const Header = styled.header`
  padding: 2.5vh 0;
  font-size: 5vh;
  font-weight: bold;
  color: white;
  background-color: ${configData.THEME_COLORS.PRIMARY};
  text-align: center;
`;

const HeaderComponent = () => <Header>My Contacts App</Header>;

export default HeaderComponent;
