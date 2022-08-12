import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Middleware

app.use(express.static('public'));

//rendering the index.hbs file
app.get('/', (req, res) => {
    res.render('home', {
        name: 'John Doe',
        title: 'Mc Macdonas',
    } );
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'John Doe',
        title: 'Mc Macdonas',
    } );
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'John Doe',
        title: 'Mc Macdonas',
    } );
});


app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});