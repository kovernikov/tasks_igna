import React, {useState} from 'react'
import Message from "./Message"
import s from './Message.module.css'


type AlternativeMessageType = {
    text: string
    btn: string
}

function AlternativeMessage(props: AlternativeMessageType) {

    return (
        <div>
            <input value={props.text}/>
            <button>Отправит</button>
        </div>
    );
}

export default AlternativeMessage;
