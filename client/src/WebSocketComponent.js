import React, { useEffect } from 'react';
const WebSocketComponent = () => {
  useEffect(() => {
    const socket = new WebSocket('wss://silver-train-jjrpwjrwxj593jpvj-8000.app.github.dev:8000/ws');
    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
    };

    socket.onclose = () => {
      console.log('Web nthi chaltu');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);
  return (
    <>
    <h1>123</h1>
    </>
    
  );
};

export default WebSocketComponent;
