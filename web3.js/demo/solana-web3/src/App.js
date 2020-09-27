import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Account, PublicKey, Connection } from '@solana/web3.js';

function App() {

  let url =  'http://api.mainnet-beta.solana.com';
  const connection = new Connection(url);
  let publicKey = new PublicKey('2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S')
  connection.getBalance(publicKey).then(balance => {
  console.log(`${publicKey} has a balance of ${balance}`);
});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
