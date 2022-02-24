import React from '@testing-library/react';
import styled from '@emotion/styled';
import configData from '../config.js';
import Button from './Button';
import FormBox from './FormBox';
import { TContact } from './MainComponent';

const Title = styled.header`
  text-align: center;
  margin: 0.3em 0;
  font-size: inherit;
`;

const Main = styled.div`
  margin-bottom: 1em;
`;

type ModalContentProps = {
  object?: TContact | undefined
}

const ModalContent = ({ object } : ModalContentProps) => (
  <Main>
    <Title>
      {object ? 'Edit Contact' : 'Add new contact'}
    </Title>
    <FormBox
      name="firstName"
      text="First Name"
      formValue={object && object.firstName}
    />
    <FormBox
      name="lastName"
      text="Last Name"
      formValue={object && object.lastName}
    />
    <FormBox
      name="phoneNumber"
      text="Phone Number"
      formValue={object && object.phoneNumber}
    />
    <FormBox
      name="email"
      text="Email Address"
      formValue={object && object.email}
    />
    <FormBox
      name="age"
      text="Age"
      value="number"
      formValue={object && object.age}
    />
    <FormBox
      name="picture"
      text="Picture"
      formValue={object && object.picture}
    />
    <FormBox
      name="link"
      text="Personal Website"
      formValue={object && object.link}
    />
    <FormBox
      name="tags"
      text="Tags"
      formValue={object && object.tags}
    />
    <Button color={configData.THEME_COLORS.SECONDARY}>
      {object ? 'Update' : 'Submit'}
    </Button>
  </Main>
);

ModalContent.defaultProps = {
  object: undefined,
};

export default ModalContent;
