
const express = require('express');
const app = express();
const port = 8030;
const hostname = '127.0.0.1';
//Iniciar:
app.listen(port, hostname, function() {
 console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});
//URL: http://127.0.0.1:8030?31_exercicio01 <-- Query String.
app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    var produto01 = parseFloat(req.query.produto01);
    var produto02 = parseFloat(req.query.produto02);
    var produto03 = parseFloat(req.query.produto03);
    var maior = parseFloat(req.query.maior);
    var menor = parseFloat(req.query.menor);
    var media = parseFloat(req.query.media);

    maior = produto01 
        if (produto02 > produto01 && produto02 > produto03)
        maior = produto02;
        else if (produto03 > produto01 && produto03 > produto02)
        maior = produto03;

    menor = produto02
        if (produto01 < produto02 && produto01 < produto03)
        menor = produto01; 
        else if (produto03 < produto01 && produto03 < produto02)
        menor = produto03;

    media = (produto01 + produto02 + produto03) / 3;
    
    res.send(`O maior número é, ${maior} o menor número é, ${menor} a média é ${media}!`);
});