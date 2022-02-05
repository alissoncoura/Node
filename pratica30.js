/*
Baixar o Express. No terminal:
npm install express --save
*/
//Rodar: node .\07_aula.js
var express = require('express');
var app = express();
var port = 8030;
var hostname = '127.0.0.1';
//http: //127.0.0.1:8030
app.get('/', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain; charset=utf-8');
 res.send('Olá, Mundo!!!');
});
//http://127.0.0.1:8030/info
app.get('/info', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain; charset=utf-8');
 res.send('Esta é a página de informação.');
});
//http://127.0.0.1:8030/index.html
app.get('/index.html', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html; charset=utf-8');
 res.send(`<html>
 <head>
 <title>Página Inicial</title>
 </head>
 <body>
 <h1>Esta é a Página Inicial</h1>
 </body>
 </html>`);
});
//http://127.0.0.1:8030/contato/:id
app.get('/contato/:id', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html; charset=utf-8');
 res.send(`<html>
 <head>
 <title>Recebimento de Parâmetro</title>
 </head>
 <body>
 <h1>O parâmetro ${req.params.id} foi recebido com sucesso.</h1>
 </body>
 </html>`);
});
//http://127.0.0.1:8030/produto/:id/:quantidade
app.get('/produto/:id/:quantidade', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html; charset=utf-8');
 res.send(`<html>
 <head>
 <title>Recebimento de mais de um Parâmetro</title>
 </head>
 <body>
 <h1>Produto:</h1>
 <h2>ID: ${req.params.id}</h2>
 <h2>Quantidade: ${req.params.quantidade}</h2>
 </body>
 </html>`);
});
//Parâmetro Opcional:
//http://127.0.0.1:8030/cadastro/:id/:quantidade/:preco?
app.get('/cadastro/:id/:quantidade/:preco?', function(req, res) {
 var id = parseInt(req.params.id);
 var quantidade = parseInt(req.params.quantidade);
 var preco = req.params.preco != undefined ? `R\$ ${parseFloat(req.params.preco)}` : 'não informado';
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html; charset=utf-8');
 res.send(`<html>
 <head>
 <title>Recebimento de Parâmetro Opcional</title>
 </head>
 <body>
 <h1>Produto:</h1>
 <h2>ID: ${id}</h2>
 <h2>Quantidade: ${quantidade}</h2>
 <h2>Preço: ${preco}</h2>
 </body>
 </html>`);
});
app.listen(port, hostname, function() {
 console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});
