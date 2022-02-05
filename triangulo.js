/*
* Baixar o Express.
* No terminal: npm install express --save
*/
//Rodar: node 02_LadosTriangulo.js
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
 console.log(dir_css);
 console.log(dir_fig);
});
//URL: http://127.0.0.1:8030/
app.get('/', function(req, res) {
 res.send(dir);
});
//URL: http://127.0.0.1:8030/triangulo/:lado1/:lado2/:lado3
app.get('/triangulo/:lado1/:lado2/:lado3', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html; charset=utf-8');
 let lado1 = parseFloat(req.params.lado1);
 let lado2 = parseFloat(req.params.lado2);
 let lado3 = parseFloat(req.params.lado3);
 let tipo;
 if (lado1 == lado2 && lado2 == lado3)
 tipo = "triangulo equilátero";
 else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
 tipo = "triangulo isósceles";
 else
 tipo = "triangulo escaleno";
 let pagina = `
 <html>
 <head>
 <title>Tipo de Triângulo</title>
 <link rel="stylesheet" href="/02_Triangulo.css">
 </head>
 <body>
 <h1>Tipo de Triângulo</h1>
 <div class="lado">Primeiro lado: ${lado1}.</div>
 <div class="lado">Segundo lado: ${lado2}.</div>
 <div class="lado">Terceiro lado: ${lado3}.</div>
 <div class="tipo">Tipo: ${tipo}.</div>
 <div class="fig"><img src="/triangulo.jpg" alt="Imagem de um triangulo"></
div>
 </body>
 </html>
 `
 res.send(pagina);
});
