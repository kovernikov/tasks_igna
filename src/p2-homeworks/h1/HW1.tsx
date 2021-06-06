import React from 'react'
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';
import src from './team_6.jpg';

const messageData = {
    avatar: src,
    name: 'Aleksey',
    message: 'npm start нажимал?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <hr/>
            homeworks 1
            <hr/>

            <div>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />

            </div>
            <AlternativeMessage btn={'Отправить'} text={'What to buy'}/>

            <hr/>
        </div>
    )
}

export default HW1;
