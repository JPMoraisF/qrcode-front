import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import TopBar from './components/TopBar/TopBar';
import Codelist from './components/Codelist/Codelist';

ReactDOM.render(
  <React.StrictMode>
    <TopBar />
    <div id="cards">

    < Codelist />
    < Codelist />
    < Codelist />
    < Codelist />

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
