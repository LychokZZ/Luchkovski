import React from 'react';
import './Styles/App.css';
import Chats from './Component/Chats';
import Enter from './Enter';

function App() {
  const MessageAuth = JSON.parse(localStorage.getItem('MessageAuth'));

  return (
    <div className="App">
      <div className="App-header">
        {MessageAuth === false ? <Enter/> :<Chats/>}
      </div>
    </div>
  );
}

export default App;
