import React from 'react';
import ReactDOM from 'react-dom';
//import App from './lesson2/App';
// import App from './lesson3/App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './lesson4_1/App';
import './lesson4_1_2/assets/style/index.css';
// import App from './lesson4_1_2/App';
// import App from './lesson4_1_3/App';
// import App from './lesson4_1_4/App';
// import App from './lesson4_2/App';
//import App from './lesson4_3/App';
//import App from './lesson4_3/App';
import './lesson4_2/assets/style/index.css';
// import App from './lesson8/App';
//import App from './lesson8/colorListDemo/App';
import App from './homework4/App';


ReactDOM.render(
  <React.StrictMode>
    {/* 实例化需要用这个{App} */}
    {App}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

