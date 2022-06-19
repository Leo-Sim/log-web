import logo from './logo.svg';

import './css/App.css';
import './css/common/common.css'

import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LeftMenu } from './component/leftMenu.js'



function App() {

  const title = 'monitor transfer';
  
  const enable = 'enable';

  let [ curDate, changeCurDate ] = useState('');


  let changeDate = () => {
    let date = new Date();
    alert(date.getMilliseconds)
    changeCurDate(date.getMilliseconds);
  };

  return (
      <BrowserRouter>
        <div  className="App">

          <LeftMenu />


            <div></div>

        </div>
      </BrowserRouter>
  )


      ;
}

export default App;

