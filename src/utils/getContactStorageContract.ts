import ABI from 'smart-contracts-abis/ContactStorage.json';
import { Contract } from 'ethers';
import configData from '../config.js';

const getContactStorageContract = (account: string, library: any): Contract => new Contract(
  configData.BLOCKCHAIN.CONTACT_STORAGE_ADDRESS,
  ABI.abi,
  library.getSigner(account),
);

export default getContactStorageContract;
