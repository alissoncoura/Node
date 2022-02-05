const produtos = [
    {
      "id":1,
      "tipo":"Sapato",
      "preco":"R$ 99,99",
    },{
      "id":2,
      "tipo":"Bolsa",
      "preco":"R$ 103,89",
    },{
      "id":3,
      "tipo":"Camisa",
      "preco":"R$ 49,98",
    },{
      "id":4,
      "tipo":"Calça",
      "preco":"R$ 89,72",
    },{
      "id":5,
      "tipo":"Blusa",
      "preco":"R$ 97,35",
      }
    ]

const express = require('express');
const path = require('path');
const app = express();
const port = 8030;
const hostname = '127.0.0.1';
const dir_css = path.join(__dirname, 'css');
const dir_fig = path.join(__dirname, 'fig');
app.use(express.static(dir_css));
app.use(express.static(dir_fig));
//Iniciar:
app.listen(port, hostname, function() {
 console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}.`);
});
//URL: http://127.0.0.1:8030/
app.get('/', function(req, res) {
 res.send(dir);
});
//URL: http://127.0.0.1:8030/produto/:id
app.get('/produto/:id', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html; charset=utf-8');
 let id = parseFloat(req.params.id) - 1;
 
 let pagina = `
 <html>
 <head>
 <title>Lista de Produtos</title>
 <link rel="stylesheet" href="/produto.css">
 </head>
 <body>
 <h1>Produto</h1>
 <div class="descricao">Descrição produto : ${produtos[id].tipo}.</div>
 <div class="valor">Preço : ${produtos[id].preco}.</div>
 <div class="fig"><img src="/presente.jpg" alt="gift"></
div>
 </body>
 </html>
 `
 res.send(pagina);
});
