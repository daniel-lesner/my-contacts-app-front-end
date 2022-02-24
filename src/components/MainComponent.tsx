import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useWeb3React } from '@web3-react/core';
import { Contract } from 'ethers';
import configData from '../config.js';
import ContactCard from './ContactCard';
import AddressBar from './AddressBar';
import Modal from './Modal';
import Button from './Button';
import injectedConnector from '../utils/injectedConnector';
import getContactStorageContract from '../utils/getContactStorageContract';
import EmptyContactsMessage from './EmptyContactsMessage';

const Main = styled.main`
  padding: 2em 0;
  text-align: center;
  background-color: ${configData.THEME_COLORS.SECONDARY};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  color: white;
`;

const ContactGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  align-items: center;
`;

const LoadingIcon = styled.div`
  border: 0.8em solid #f3f3f3;
  border-top: 0.8em solid ${configData.THEME_COLORS.PRIMARY}; 
  border-radius: 50%;
  width: 1em;
  height: 1em;
  animation: spin 2s linear infinite;
  margin: 2em 0;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export type TContact = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  age: number;
  picture?: string;
  link: string;
  tags: string[];
};

const App = () => {
  const [contactData, setContactData] = useState<TContact[]>([]);
  const [isModalOpen, setModalOpen] = useState('');
  const [contractInstance, setContractInstance] = useState<Contract>();
  const [isActionPending, setActionPending] = useState(false);
  const [tags, setTags] = useState(['']);

  const {
    account, library, activate, deactivate,
  } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate(injectedConnector);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWallet = async () => {
    try {
      deactivate();
      setContactData([]);
    } catch (error) {
      console.log(error);
    }
  };

  const openContact = (id: number) => {
    setModalOpen(`${id}`);
  };

  const getContacts = async (_contractInstance: Contract | undefined) => {
    setActionPending(true);
    const numberOfContacts = await _contractInstance?.userAddressToNumberOfContacts(account);
    const results = [];

    for (let contactId = 1; contactId <= numberOfContacts; contactId += 1) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const newData = await _contractInstance?.getContact(account, contactId);
        if (newData !== '') {
          results.push(
            { id: contactId, ...JSON.parse(newData) },
          );
        }
      } catch (error) {
        console.log(error);
      }
    }

    setContactData(results);
    setActionPending(false);
  };

  // SOLVEIT - any
  const createContact = async (newObject: any) => {
    setActionPending(true);

    try {
      await contractInstance?.setContact(account, JSON.stringify(newObject));

      contractInstance?.once('ContactAdded', async (sender, contactId) => {
        setContactData((state: any) => [
          ...state,
          { ...newObject, id: contactId },
        ]);
        setActionPending(false);
      });
    } catch (error) {
      setActionPending(false);
    }
  };

  const deleteContact = async (id: number) => {
    setActionPending(true);
    try {
      await contractInstance?.deleteContact(account, id);

      contractInstance?.once('ContactDeleted', async () => {
        setContactData((state) => state.filter((item: TContact) => item.id !== id));
        setActionPending(false);
      });
    } catch (error) {
      setActionPending(false);
    }
  };

  // SOLVEIT - any
  const updateContact = async (id: number, updatedObject: any) => {
    setActionPending(true);
    try {
      await contractInstance?.modifyContact(account, id, JSON.stringify(updatedObject));

      contractInstance?.once('ContactModified', async () => {
        setContactData((state) => state.map((item: TContact) => (
          item.id === id ? { ...updatedObject, id } : item)));
        setActionPending(false);
      });
    } catch (error) {
      setActionPending(false);
    }
  };

  // SOLVEIT
  const onFormSubmit = (event: any) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const formObject = Object.fromEntries(data.entries());
    const formObjectWithTags = { ...formObject, tags };
    setTags([]);

    if (isModalOpen === 'new') createContact(formObjectWithTags);
    else updateContact(Number(isModalOpen), formObjectWithTags);

    setModalOpen('');

    return false;
  };

  useEffect(() => {
    if (account) {
      setContractInstance(getContactStorageContract(account, library));
    }
  }, [account]);

  useEffect(() => {
    getContacts(contractInstance);
  }, [contractInstance]);

  return (
    <>
      {isModalOpen && (
        <Modal
          onFormSubmit={onFormSubmit}
          state={isModalOpen}
          contactData={contactData}
          tags={tags}
          setTags={setTags}
        />
      )}
      {account && <AddressBar account={account} disconnectWallet={disconnectWallet} />}
      <Main onClick={() => isModalOpen && setModalOpen('')}>
        {account
          ? (
            <>
              {isActionPending
                ? <LoadingIcon />
                : (
                  <Button
                    onClick={() => setModalOpen('new')}
                    color={configData.THEME_COLORS.PRIMARY}
                  >
                    Add contact
                  </Button>
                )}
              {contactData.length !== 0 ? (
                <ContactGrid>
                  {contactData.map((item) => (
                    <ContactCard
                      contactInfo={item}
                      key={item.id}
                      removeContact={
                        () => !(isModalOpen || isActionPending) && deleteContact(item.id)
                      }
                      openContact={
                        () => !(isModalOpen || isActionPending) && openContact(item.id)
                      }
                    />
                  ))}
                </ContactGrid>
              ) : (
                <EmptyContactsMessage />
              )}
            </>
          )
          : (
            <Button
              onClick={connectWallet}
              color={configData.THEME_COLORS.PRIMARY}
            >
              Connect to Metamask
            </Button>
          )}
      </Main>
    </>
  );
};

export default App;
