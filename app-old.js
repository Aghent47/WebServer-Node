import http from 'http';

http.createServer( (req, res) => {

    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write( 'Hello server' );
    res.end();  
})
.listen(8080, () => {
    console.log('Server is running on port 8080');
});
