
import '../../../css/log-choco/logchoco.css'

import {useEffect, useRef, useState} from "react";
import axios from "axios";
import React from 'react';

export const LogChocoInbound = React.forwardRef((props, ref) => {

    useEffect(() => {
        setLeftPadding(ref.current.offsetWidth)
    })

    // value for padding-left
    let [leftPadding, setLeftPadding] = useState(0);
    let [setting, changeSetting] = useState('dda');

    axios.get('http://127.0.0.1:30001/setting/log/file').then(res => {

        let data = res.data[0];
        let text = JSON.stringify(data);
        text = text.replace(/\\"/g, '"')
        changeSetting(text);
    });


    return (
        <div>
            <div className="setting" style={{ paddingLeft: leftPadding}}>
                <div  style={{ float: 'right'}}>button</div>
                { setting }
            </div>

        </div>
    );
})

