// src/WebSocketComponent.js

import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Create WebSocket connection
    const socket = new WebSocket('wss://silver-train-jjrpwjrwxj593jpvj-8000.app.github.dev:8000/ws');

    // Connection opened
    socket.addEventListener('open', () => {
      console.log('Connected to WebSocket server');
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
      console.log('Message from server ', event.data);
      setMessages((prevMessages) => [...prevMessages, event.data]);
    });

    // Handle socket close
    socket.addEventListener('close', () => {
      console.log('Disconnected from WebSocket server');
    });

    // Handle socket errors
    socket.addEventListener('error', (error) => {
      console.error('WebSocket error: ', error);
    });

    // Cleanup function to close the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(input);
      setInput('');
      setWs('');
    }
  };

  return (
    <div>
      <h1>WebSocket Client</h1>
      <div>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type a message..." 
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketComponent;
