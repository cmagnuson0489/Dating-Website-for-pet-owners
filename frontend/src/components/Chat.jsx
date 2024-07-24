import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:3000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);    
    });
  }, []);

  const sentMessage = () => {
    socket.emit('sentMessage', message);
    setMessage('');
  };

  return(
    <div>
      
    </div>
  )