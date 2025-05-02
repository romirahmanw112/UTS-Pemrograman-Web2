const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Klien baru terhubung');
    ws.send('Selamat datang di server WebSocket!');

    ws.on('message', (message) => {
        console.log('Pesan diterima dari klien:', message.toString());
        ws.send(`Server menerima pesan: ${message}`);
    });

    ws.on('close', () => {
        console.log('Klien terputus');
    });

    ws.on('error', (error) => {
        console.error('Error koneksi:', error);
    });
});

console.log('Server WebSocket berjalan di port 8080');
