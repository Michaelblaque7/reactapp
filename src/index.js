import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Lister from './Lister';
import ListerB from './ListerB';
import { ListProvider } from './context/ListContext';
// import UiApp from "./Ui_App";

const root = ReactDOM.createRoot(document.getElementById('root'));
const myTeam = "Ikorodu Bombers"

root.render(
  // <React.StrictMode>
  <ListProvider>
      {/* // <App /> */}
      {/* // <Lister/> */}
      <ListerB/>
      {/* // {<UiApp/>} */}
    </ListProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
