import { InjectedConnector } from '@web3-react/injected-connector';
import configData from '../config.js';

const injectedConnector = new InjectedConnector(
  { supportedChainIds: configData.BLOCKCHAIN.SUPPORTED_CHAIN_IDS },
);

export default injectedConnector;
