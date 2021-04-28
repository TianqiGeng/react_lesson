import React from 'react';
import ReactDOM from 'react-dom';
//import App from './lesson2/App';
// import App from './lesson3/App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './lesson4_1/App';
import './lesson4_1_2/assets/style/index.css';
// import App from './lesson4_1_2/App';
// import App from './lesson4_1_3/App';
// import App from './lesson4_3/App';
// import App from './lesson5/App';
// import App from './lesson5_2/components/App';
// import App from './lesson5_3/components/App';
// import App from './lesson5_4/components/App';
// import App from './lesson6/App';
// import App from './lesson6_1/App';
// import './lesson6_1/App.css';
import App from './lesson6_2/App';
import './lesson6_2/App.css';
// import App from './lesson8/App';
//import App from './lesson8/colorListDemo/App';
// import App from './homework4/App';


ReactDOM.render(
  <React.StrictMode>
    {/* 实例化需要用这个{App} */}
    {/* {App} */}
    {/* lesson6后面都用<App/> */}
    {/* <App initValue={123} caption="ads" /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

