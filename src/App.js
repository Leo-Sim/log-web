
import './css/App.css';
import './css/common/common.css'

import { useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LeftMenu } from './component/leftMenu.js'

import { LogChocoInbound } from "./page/log-choco/setting/inbound";


function App() {


    const mainMenu = useRef();



      return (
          <BrowserRouter>
            <div  className="App">
                <LeftMenu ref={ mainMenu }/>

                <div className="padding10" >
                    <Routes>

                        <Route path="/logChoco/inbound" element={  <LogChocoInbound ref={ mainMenu } /> }></Route>

                    </Routes>
                </div>



            </div>
          </BrowserRouter>
      );
}

export default App;

