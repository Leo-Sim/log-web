import logo from './logo.svg';

import './css/App.css';
import './css/common/button.css'

import { useState } from 'react';

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
    <div  className="App">
      <div> { title } </div>
      <div> 
        <div>{ curDate }</div>
        <div className="button-enable" onClick={ changeDate  }> { enable } </div>
      </div>
    </div>
  );
}

export default App;

