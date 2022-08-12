import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000;

// Middleware

app.use(express.static('public'));

app.get('/hello-world', (req, res) => {
    res.send('Hello World!!')
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});