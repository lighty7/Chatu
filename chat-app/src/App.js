import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";
import './App.css';
//sleep u have exams tmorrow
const socket = io('<http://localhost:3000>');

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [user, setUser] = useState(null);

  // Join a chat room
  const joinChatRoom = (userDetails) => {
    setUser(userDetails);
    socket.emit('join', userDetails);
  };

  // Leave a chat room
  const leaveChatRoom = () => {
    socket.emit('leave', user);
    setUser(null);
  };

  // More code will go here

  return (
    <div className="chat-room">
      // The chat room components will go here
    </div>
  );
}

export default ChatRoom;