/*
* Baixar o Express.
* No terminal: npm install express --save
*/
//Rodar: node .\02_aula_02.js
const express = require('express');
const app = express();
const port = 8030;
const hostname = '127.0.0.1';
//Iniciar:
app.listen(port, hostname, function() {
 console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});
//URL: http://127.0.0.1:8030?nomeAluno=Ana <-- Query String.
app.get('/', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain; charset=utf-8');
 var nomeAluno = req.query.nomeAluno;
 res.send(`Olá, ${nomeAluno}!!!`);
});