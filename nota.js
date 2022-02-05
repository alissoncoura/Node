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
});
//URL: http://127.0.0.1:8030/
app.get('/', function(req, res) {
 res.send(dir);
});
//URL: http://127.0.0.1:8030/nota/:nota1/:nota2/:nota3
app.get('/nota/:nota1/:nota2/:nota3', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html; charset=utf-8');
 let aprovacao = "reprovado.jpg"
 let cor = "resultadoReprovado"
 let nota1 = parseFloat(req.params.nota1);
 let nota2 = parseFloat(req.params.nota2);
 let nota3 = parseFloat(req.params.nota3);
 let media = (nota1 + nota2 + nota3) / 3;
 if (media >= 0 && media < 3)
 media = "REPROVADO";
 else if (media >= 3 && media < 7)
 media = "EXAME";
 else if (media >= 7 && media < 10) {
 media = "APROVADO"; 
 aprovacao = "aprovado.jpg"
 cor = "resultadoAprovado"
 }
 else
 media = "valor inválido";
 let pagina = `
 <html>
 <head>
 <title>Nota Aluno</title>
 <link rel="stylesheet" href="/nota_aluno.css">
 </head>
 <body>
 <h1>Nota Aluno</h1>
 <div class="nota">Primeira nota: ${nota1}.</div>
 <div class="nota">Segunda nota: ${nota2}.</div>
 <div class="nota">Terceira nota: ${nota3}.</div>
 <div class="${cor}">Média: ${media}.</div>
 <div class="fig"><img src="/${aprovacao}" alt="Resultado"></
div>
 </body>
 </html>
 `
 res.send(pagina);
});
