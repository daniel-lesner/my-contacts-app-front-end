import React from 'react';
import styled from '@emotion/styled';

const Main = styled.div`
  margin: 1em;
`;

const EmptyContactsMessage = () => (
  <Main>
    <div>Contacts list is empty!</div>
    <div>Please use the button above to add a contact.</div>
  </Main>
);

export default EmptyContactsMessage;
