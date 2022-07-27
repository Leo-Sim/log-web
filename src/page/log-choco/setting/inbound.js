
import '../../../css/log-choco/logchoco.css'
import 'react-json-pretty/themes/monikai.css';

import {useEffect, useRef, useState} from "react";

import axios from '../../../component/network/axios.js'
import React from 'react';
import JSONPretty from "react-json-pretty";

// get setting data from server
const getSetting = (changSettingText, changeSetting) => {

    axios.get('/setting/log/file').then(res => {
console.log('1111111')
        let data = JSON.parse(res.data[0]);
        // print json pretty
        var text = JSON.stringify(data, undefined, 2);

        changSettingText(text);
        changeSetting(data);
    });
}

const changeSetting = () => {

}

const saveSetting = (param) => {
    axios.post('/setting/log/file', null, { params: param }).then(res => {

    });
}

export const LogChocoInbound = () => {

    useEffect(() => {
        getSetting(changSettingText, changeSetting)
    }, []);

    // value for padding-left
    let [leftPadding, setLeftPadding] = useState(0);
    let [setting, changeSetting] = useState('');
    let [settingText, changSettingText] = useState('');

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

        const param = {
            json: settingText
        }

        saveSetting(param);
    }



    return (
        <div>
            <div className="setting">
                <div className={ 'btn-edit ' + editComponent} onClick={ clickEdit }>Edit</div>
                <div className={ 'btn-save ' + saveComponent } onClick={ clickSave }>Save</div>

                <JSONPretty id="json-pretty" className={ editComponent } data={ setting }></JSONPretty>
                <textarea rows={100} cols={100} className={ saveComponent } value={ settingText } onChange={ (e) => changSettingText(e.target.value) }></textarea>
            </div>

        </div>
    );
}

