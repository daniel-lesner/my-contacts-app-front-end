import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import shorthenAddress from '../utils/shortenAddress';

const Main = styled.div`
  background-color: white;
  padding: 0.4em 0;
  color: black;
  width: 100%;
  font-size: inherit;
  vertical-aling: middle;
  display: flex;
  flex-orientation: row;
  align-items: center;
  justify-content: space-around;
`;

type AddressBarProps = {
  account: string;
  disconnectWallet: any;
}

const AddressBar = ({
  account,
  disconnectWallet,
}: AddressBarProps) => (
  <Main>
    <span>
      {'Connected with '}
      <b>
        {shorthenAddress(account)}
      </b>
    </span>
    <Button onClick={disconnectWallet} color="grey">Disconnect</Button>
  </Main>
);

export default AddressBar;
