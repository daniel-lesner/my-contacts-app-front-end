import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Web3ReactProvider } from '@web3-react/core';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import reportWebVitals from './reportWebVitals';
import getLibrary from './utils/getLibrary';

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <HeaderComponent title="My Contacts App" />
      <MainComponent />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
