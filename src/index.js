import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import Store from "./conServ/store";


const store = new Store();

export const Context = createContext({
    store,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
