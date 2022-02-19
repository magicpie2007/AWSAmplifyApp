import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <p>
                Hey {user.username}, welcome to my channel, with auth!
              </p>
              <button onClick={signOut}>Sign out</button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

//export default App;
export default App;
