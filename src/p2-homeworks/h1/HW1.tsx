import React from 'react'
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';

const messageData = {
    avatar: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.18169-9/10415677_591647244282481_7781049486693802144_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=p-4coRc41Y8AX-5r0By&_nc_ht=scontent-prg1-1.xx&oh=135a412cff638dc43f97dc6a287f77ac&oe=60B5EA57',
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
