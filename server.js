import WebSocket, { WebSocketServer } from 'ws';
export const webSocketRun = () => {
  const wss = new WebSocketServer({
    port: 8080,
    perMessageDeflate: {
      zlibDeflateOptions: { chunkSize: 1024, memLevel: 7, level: 3 },
      zlibInflateOptions: { chunkSize: 10 * 1024 },
      clientNoContextTakeover: true,
      serverNoContextTakeover: true,
      serverMaxWindowBits: 10,
      concurrencyLimit: 10,
      threshold: 1024
    }
  });
  wss.on('connection', function connection(ws) {
    // Event listener for receiving messages from the client
    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);
      // Echo the message back to the client
      ws.send(`Server received: ${message}`);
    });

    // Event listener for client disconnection
    ws.on('close', () => {
      console.log('Client disconnected');
    });

    // Send a welcome message to the newly connected client
    ws.send('Welcome to the WebSocket server!');
  });
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
