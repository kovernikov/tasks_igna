import React from 'react'
import s from './Message.module.css'

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={s.message}>
            <div className={s.container}>
                <img className={s.img} src={props.avatar} alt="avatar"/>
                <div className={s.messageData}>
                    <div className={s.titleData}>
                        <span className={s.span}>{props.name}</span>
                        <p className={s.p}>{props.message}</p>
                    </div>
                    <span className={s.span}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
