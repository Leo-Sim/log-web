
import './css/App.css';
import './css/common/common.css'

import { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LeftMenu } from './component/leftMenu.js'

import { LogChocoInbound } from "./page/log-choco/setting/inbound";
import { LogChocoMonitor } from "./page/log-choco/monitor/monitor";
// import {useEffect} from "@types/react";


function App() {

var aa;
    useEffect(() => {


    });

console.log('2222###')

      return (
          <BrowserRouter>
            <div  className="App">
                <LeftMenu/>

                <div style={{'paddingLeft': '55px'}}>
                    <Routes>

                        <Route path="/logChoco/inbound" element={ <LogChocoInbound /> }></Route>
                        <Route path="/logChoco/monitor" element={ <LogChocoMonitor />}></Route>
                    </Routes>
                </div>

            </div>
          </BrowserRouter>
      );
}

export default App;

