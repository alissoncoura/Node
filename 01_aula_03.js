/*
 Baixar o Express. No terminal: npm install express --save
 Baixar o body-parser. No terminal: npm install body-parser --save
*/
//Rodar: node .\01_aula_03.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//Para dados enviados no corpo (body) da mensagem no formato JSON-encoded:
app.use(express.json());
/*Para dados enviados no corpo (body) da mensagem no formato URL-encoded:
 OBS: bodyParser.urlencoded ([opções]):
 Retorna um objeto contendo os dados da requisição em req.body.
 Este objeto conterá pares na forma chave-valor em que o valor pode
 ser uma string ou array (quando extended é falso), ou qualquer tipo
 (quando extended é verdadeiro).
*/
app.use(express.urlencoded({ extended: true }));
var port = 8030;
var hostname = 'localhost';
app.listen(port, hostname, function() {
 console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});
//URL: http://127.0.0.1:8030
app.post('/', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain; charset=utf-8');
 console.log(req.body);
 res.send(`Olá, ${req.body.nome}! Sua nota é ${req.body.nota}!`);
});
