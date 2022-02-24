import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import ReactTagInput from '@pathofdev/react-tag-input';
import configData from '../config.js';
import Button from './Button';
import FormBox from './FormBox';
import { TContact } from './MainComponent';
import '@pathofdev/react-tag-input/build/index.css';

const Title = styled.header`
  text-align: center;
  margin: 0.3em 0;
  font-size: 3rem;
`;

const Main = styled.div`
  margin-bottom: 1em;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const FormGrid = styled.div`
  margin-bottom: 1em;
`;

const TagsGrid = styled.div`
  margin: 60px 20px 20px;
`;

const TagsTitle = styled.div`
margin-bottom: 0.4rem;
`;

type ModalContentProps = {
  object?: TContact | undefined;
  tags: Array<string>;
  setTags: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const ModalContent = ({ object, tags, setTags } : ModalContentProps) => {
  useEffect(() => {
    if (object) setTags(object?.tags);
  }, []);

  return (
    <Main>
      <Title>
        {object ? 'Edit Contact' : 'Add new contact'}
      </Title>
      <FormGrid>
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
          text="Picture Link"
          formValue={object && object.picture}
        />
        <FormBox
          name="link"
          text="Personal Website"
          formValue={object && object.link}
        />
        <TagsGrid>
          <TagsTitle>Tags:</TagsTitle>
          <ReactTagInput
            tags={tags}
            onChange={(newTags) => setTags(newTags)}
          />
        </TagsGrid>
      </FormGrid>
      <Button color={configData.THEME_COLORS.SECONDARY}>
        {object ? 'Update' : 'Submit'}
      </Button>
    </Main>
  );
};

ModalContent.defaultProps = {
  object: undefined,
};

export default ModalContent;
