import express from 'express'
const app = express()
const port = 3000;

app.get('/',  (req, res) =>{
  res.send('Home Page')
});

app.get('/hello-world', (req, res) => {
    res.send('Hello World!!')
});

app.get('*', (req, res) => {
    res.send('404 Page Not Found')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});