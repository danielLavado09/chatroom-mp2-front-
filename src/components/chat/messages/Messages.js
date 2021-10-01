import React, { useEffect, useRef } from 'react'
import Message from '../message/Message';
import './Messages.css';

const Messages = ({messages, user_id}) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(() => {
      scrollToBottom()
    }, [messages]);

    return (
      <div className='messages'>
            {messages.map((message,i)=>(
                <Message key={message._id} message = {message}
                current_uid={user_id}/>
            ))}
          <div ref={messagesEndRef} />
      </div >
    )
}

export default Messages