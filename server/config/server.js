import WebSocket, { WebSocketServer } from 'ws';
export const webSocketRun = () => {
  const wss = new WebSocketServer({ port: 9000 });

  wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);
      ws.send(`Server received: ${message}`);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });

    ws.send('Welcome to the WebSocket server!');
  });

  console.log('WebSocket server is running on ws://localhost:8080');

  const url = 'wss://silver-train-jjrpwjrwxj593jpvj-8000.app.github.dev'; // Replace with your WebSocket server URL
  const ws = new WebSocket(url);

  ws.on('open', () => {
    console.log('Connected to the server');
  });

  ws.on('message', (data) => {
    console.log(`Received message: ${data}`);
  });

  ws.on('close', (code, reason) => {
    console.log(`Connection closed. Code: ${code}, Reason: ${reason}`);
  });

  ws.on('error', (error) => {
    console.error(`WebSocket error: ${error.message}`);
  });

};
