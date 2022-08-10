import http from 'http';

http.createServer( (req, res) => {
    res.write('Hello Server!!!');
    res.end();  
})
.listen(8080, () => {
    console.log('Server is running on port 8080');
});
