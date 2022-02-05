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
    console.log("funcionou")
 res.send(dir_css);
});
//URL: http://127.0.0.1:8030/equacao/:a/:b/:c
app.get('/equacao/:a/:b/:c', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let c = parseFloat(req.params.c);
    let resp;

    if (a == 0) {
      if (b ==0) {
        if (c != 0)
          resp = "Coeficientes informados incorretamente";
        else 
          resp = "Igualdade confirmada: 0 = 0";
      } else {
        resp = "Esta é uma equação de primeiro grau";
        let x = -c / b;
        resp = 'Resultado: ' + x;
      }
    } else {
        resp = "Esta é uma equação do segundo grau";
        

         let delta = Math.pow(b, 2) - 4 * (a * c);    
        
        if (delta < 0) 
            resp += "Esta equação não possui raízes reais (delta < 0)";
        else if (delta === 0) {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            resp += "Esta equação possui duas raízes reais iguais: x' = x'' = " + x1;
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            resp += "Esta equação possui duas raízes reais diferentes: x' " + x1 + ", x'' = " + x2;
        }
    }
 
   let pagina = `
    <html>
    <head>
    <title>Equação</title>
    <link rel="stylesheet" href="/resultado.css">
    </head>
    <body>
    <form action="/pagina-processa-dados-do-form" method="get">
        <div>
            <label for="valorA">A:</label>
            <input type="text" id="valorA" />
        </div>
        <div>
            <label for="valorB">B:</label>
            <input type="text" id="valorB" />
        </div>
        <div>
            <label for="valorC">C:</label>
            <input type="text" id="valorC" />
        </div>
        <div class="button">
            <button type="submit">Enviar sua mensagem</button>
        </div>
        <div class="resposta">
        <p> 
            ${resp}
        </p>
        </div>
    </form>
    </body>
    </html>
    `
   res.send(pagina);
});
