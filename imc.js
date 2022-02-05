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
//URL: http://127.0.0.1:8030/IMC/:peso/:altura
app.get('/IMC/:peso/:altura', function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html; charset=utf-8');
 let peso = parseFloat(req.params.peso);
 let altura = parseFloat(req.params.altura);
 let imc = peso / (altura * altura);
 if (imc == 0 || imc < 18.5)
 imc = "Abaixo do Peso";
 else if (imc == 18.6 || imc < 24.9)
 imc = "Peso ideal (Parabéns)";
 else if (imc == 25.0 || imc < 29.9)
 imc = "Levemente acima do peso";
 else if (imc == 30.0 || imc < 34.9)
 imc = "Obesidade grau I";
 else if (imc == 35.0 || imc < 39.9)
 imc = "Obesidade grau II (Severa)";
 else if (imc > 40.0)
 imc = "Obesidade grau III (Mórbida)";
 else
 imc = "valor inválido";
 let pagina = `
 <html>
 <head>
 <title>IMC</title>
 <link rel="stylesheet" href="/resultadoIMC.css">
 </head>
 <body>
 <h1>Resultado IMC</h1>
 <div class="imc">Resultado IMC: ${imc}.</div>
 <div class="fig"><img src="/imc.gif" alt="IMC"></
div>
 </body>
 </html>
 `
 res.send(pagina);
});
