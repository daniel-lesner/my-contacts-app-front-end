import React, { FormEventHandler, useState } from 'react';
import styled from '@emotion/styled';
import configData from '../config.js';
import ModalContent from './ModalContent';
import ContactInfo from './ContactInfo';
import { TContact } from './MainComponent';

const Container = styled.form`
  width: 60%;
  height: 80%;
  position: absolute;
  background-color: ${configData.THEME_COLORS.PRIMARY};
  color: white;
  border: 2px solid black;
  margin: 2vw auto 0;
  left: 0;
  right: 0;
  overflow: auto;
  text-align: center;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.5);
`;

type ModalProps = {
  onFormSubmit: FormEventHandler<HTMLFormElement>;
  state: string;
  contactData: Array<TContact>;
}

const Modal = ({
  onFormSubmit,
  state,
  contactData,
}: ModalProps) => {
  const [isEditModeOn, setEditModeOn] = useState(false);
  const contact = contactData.find((item) => item.id === Number(state));

  return (
    <Container onSubmit={onFormSubmit}>
      {state === 'new' ? (
        <ModalContent />
      ) : (
        <div>
          {isEditModeOn ? (
            <ModalContent object={contact} />
          ) : (
            <ContactInfo
              object={contact}
              isEditModeOn={isEditModeOn}
              setEditModeOn={setEditModeOn}
            />
          )}
        </div>
      )}
    </Container>
  );
};

export default Modal;
