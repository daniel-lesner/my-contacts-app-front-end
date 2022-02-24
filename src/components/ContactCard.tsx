import React from 'react';
import styled from '@emotion/styled';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ClearIcon from '@mui/icons-material/Clear';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { TContact } from './MainComponent';
import configData from '../config.js';

const Container = styled.div`
  display: flex;
  flex-orientation: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 2vw 1.5vw;
  background-color: ${configData.THEME_COLORS.SECONDARY};
  outline: 1px solid ${configData.THEME_COLORS.PRIMARY};
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8vw;
`;

type ContactCardProps ={
  contactInfo: TContact;
  removeContact: React.MouseEventHandler<SVGSVGElement> | undefined;
  openContact: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const ContactCard = ({ contactInfo, removeContact, openContact }: ContactCardProps) => (
  <Container>
    <div style={{ color: 'cyan' }}>
      {contactInfo.firstName}
      {' '}
      {contactInfo.lastName}
    </div>
    <Grid>
      <GridItem>
        <PhoneIphoneIcon style={{ color: 'black', fontSize: '3vw' }} />
        <div>{contactInfo.phoneNumber}</div>
      </GridItem>
      <GridItem onClick={openContact}>
        <div style={{ color: 'green', cursor: 'pointer' }}>OPEN</div>
        <OpenInFullIcon
          style={{ color: 'green', fontSize: '2vw', marginLeft: '5px' }}
        />
      </GridItem>
      <GridItem>
        <ClearIcon
          style={{ color: 'red', fontSize: '3vw', cursor: 'pointer' }}
          onClick={removeContact}
        />
      </GridItem>
    </Grid>
  </Container>
);

export default ContactCard;
