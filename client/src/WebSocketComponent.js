import React, { useEffect } from 'react';
const WebSocketComponent = () => {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
    };

    socket.onclose = () => {
      console.log('Disconnected from WebSocket server');
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
    </>
  );
};

export default WebSocketComponent;
