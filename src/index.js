import React from 'react';
import ReactDOM from 'react-dom';
// import App from './lesson4_1/App';
// import App from './lesson4_2/App';
import App from './lesson4_3/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './lesson4_2/assets/style/index.css';

ReactDOM.render(
  <React.StrictMode>
    {App}
  </React.StrictMode>,
  document.getElementById('root')
);

