import styled from '@emotion/styled';
import React from 'react';
import { TContact } from './MainComponent';

const Content = styled.div`
  text-align: left;
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
      <div>
        {object.lastName}
        {' '}
        {object.firstName}
      </div>
      <div>
        Phone number:
        {' '}
        {object.phoneNumber}
      </div>
      <div>
        Email address:
        {' '}
        {object.email}
      </div>
      <div>
        Age:
        {object.age}
      </div>
      <div>
        <img src={object.picture} alt="Contact" style={{ maxWidth: '25%', height: 'auto' }} />
      </div>
      <div>
        Website:
        {' '}
        <a href={object.link} target="_blank" rel="noreferrer">
          {object.link}
        </a>
      </div>

      <div>
        Tags:
        {' '}
        {object.tags}
      </div>
      <label htmlFor="editMode">
        Toggle Edit Mode
        <input
          id="editMode"
          type="checkbox"
          checked={isEditModeOn}
          onChange={() => setEditModeOn(!isEditModeOn)}
        />
      </label>
    </Content>
    )}
  </div>
);

export default ContactInfo;
