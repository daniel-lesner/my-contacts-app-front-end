import styled from '@emotion/styled';
import React from 'react';
import configData from '../config.js';
import Button from './Button';
import { TContact } from './MainComponent';

const Content = styled.div`
  text-align: left;
  font-size: inherit;
  margin: 0.4em 0.2em;

  @media (max-width: 1025px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

`;

const Row = styled.div`
padding: 1.5em 0 4em;
`;

const Column = styled.div`
  @media (min-width: 1025px) {
    width: 50%;
    float: left
  }
`;

const TagsBox = styled.div`
  text-align: center;
`;

const TagsGrid = styled.div`
display: grid;

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
}
`;

const TagElement = styled.div`
  margin: 0 1em;
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
      <Row>
        <Column>
          <div>
            <b>
              Phone number:
            </b>
            {' '}
            {object.phoneNumber}
          </div>
          <div>
            <b>Age: </b>
            {object.age}
          </div>
        </Column>
        <Column>
          <div>
            <b>Email address: </b>
            <a href={`mailto: ${object.email}`}>
              {object.email}
            </a>
          </div>
          <div>
            <b>
              Website:
            </b>
            {' '}
            <a href={object.link} target="_blank" rel="noreferrer">
              {object.link}
            </a>
          </div>
        </Column>
      </Row>
      <TagsBox>
        <div>
          <b>
            Tags:
          </b>
          {' '}
        </div>
        <TagsGrid>
          {object.tags.map((item) => <TagElement>{item}</TagElement>)}
        </TagsGrid>
      </TagsBox>
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
