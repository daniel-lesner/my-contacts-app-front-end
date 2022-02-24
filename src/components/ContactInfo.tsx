import styled from '@emotion/styled';
import React from 'react';
import configData from '../config.js';
import Button from './Button';
import { TContact } from './MainComponent';

const Content = styled.div`
  text-align: left;
  font-size: inherit;
  margin: 0.4em 0.2em;
`;

type ContactInfoProps = {
  object: TContact | undefined;
  isEditModeOn: boolean;
  setEditModeOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactInfo = ({
  object, isEditModeOn, setEditModeOn,
}: ContactInfoProps) => (
  <div>
    {!!object && (
    <Content>
      <div style={{ textAlign: 'center', marginBottom: '0.5em' }}>
        <b>
          {object.lastName}
          {' '}
          {object.firstName}
        </b>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src={object.picture} alt="Contact" style={{ maxWidth: '15%', height: 'auto' }} />
      </div>
      <div>
        Phone number:
        {' '}
        {object.phoneNumber}
      </div>
      <div>
        {`Email address: ${object.email}`}
      </div>
      <div>
        {`Age: ${object.age}`}
      </div>
      <div>
        Website:
        {' '}
        <a href={object.link} target="_blank" rel="noreferrer">
          {object.link}
        </a>
      </div>
      <div>
        <div>
          Tags:
          {' '}
        </div>
        <div>
          {object.tags.map((item) => <span>{item}</span>)}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2em' }}>
        <Button
          onClick={() => setEditModeOn(!isEditModeOn)}
          color={configData.THEME_COLORS.SECONDARY}
        >
          Edit
        </Button>
      </div>
    </Content>
    )}
  </div>
);

export default ContactInfo;
