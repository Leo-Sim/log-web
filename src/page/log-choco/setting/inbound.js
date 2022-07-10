
import '../../../css/log-choco/logchoco.css'
import 'react-json-pretty/themes/monikai.css';

import {useEffect, useRef, useState} from "react";
import axios from "axios";
import React from 'react';
import JSONPretty from "react-json-pretty";

export const LogChocoInbound = React.forwardRef((props, ref) => {

    useEffect(() => {
        setLeftPadding(ref.current.offsetWidth)
    })

    // value for padding-left
    let [leftPadding, setLeftPadding] = useState(0);
    let [setting, changeSetting] = useState('dda');

    const hideClass = 'hide';

    let [editComponent, setEditComponent] = useState('');
    let [saveComponent, setSaveComponent] = useState(hideClass);

    const clickEdit = () => {
        setEditComponent(hideClass);
        setSaveComponent('');
    }

    const clickSave = () => {
        setEditComponent('');
        setSaveComponent(hideClass);
    }

    axios.get('http://127.0.0.1:30001/setting/log/file').then(res => {

        let data = res.data[0];
        let text = JSON.stringify(data);
        // text = text.replace(/\\"/g, '"')


        changeSetting(data);
    });



    return (
        <div>
            <div className="setting" style={{ paddingLeft: leftPadding}}>
                <div className={ 'btn-edit ' + editComponent} onClick={ clickEdit }>Edit</div>
                <div className={ 'btn-save ' + saveComponent } onClick={ clickSave }>Save</div>

                <JSONPretty id="json-pretty" className={ editComponent } data={setting}></JSONPretty>
                <textarea value={ setting }></textarea>
            </div>

        </div>
    );
})

