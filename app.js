const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = 443;

const serverOptions = {
	// Certificate(s) & Key(s)
	cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
	key: fs.readFileSync(path.join(__dirname, 'key.pem')),

	// TLS Versions
	maxVersion: 'TLSv1.3',
	minVersion: 'TLSv1.1',
}
const server = require('https').Server(serverOptions, app);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/www/index.html'));
});
app.get('/main.css', (req, res) => {
	res.sendFile(path.join(__dirname, '/www/main.css'));
});
app.get('/assets/flight.svg', (req, res) => {
	res.sendFile(path.join(__dirname, '/www/assets/flight.svg'));
});
// Start the Server
server.listen(PORT, () => {
    console.log(`[-] Server Listening on Port ${PORT}`);
});