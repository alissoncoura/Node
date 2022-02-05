
const express = require('express');
const app = express();
const port = 8030;
const hostname = '127.0.0.1';
//Iniciar:
app.listen(port, hostname, function() {
 console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});
//URL: http://127.0.0.1:8030?31_exercicio02 <-- Query String.
app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    var z = parseFloat(req.query.z);

    if(x + y > z && x + z > y && z + y > x){
        res.send("Os 3 lados formam um triangulo!");
    }
    else
        res.send("Os 3 lados NAO formam um trinagulo!");

});