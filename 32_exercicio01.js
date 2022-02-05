var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
//Para dados enviados no corpo (body) da mensagem no formato JSON-encoded:
app.use(express.json());
/*Para dados enviados no corpo (body) da mensagem no formato URL-encoded:
OBS: express.urlencoded ([opções]): 
Retorna um objeto contendo os dados da requisição em req.body. 
Este objeto conterá pares na forma chave-valor em que o valor pode 
ser uma string ou array (quando extended é falso), ou qualquer tipo 
(quando extended é verdadeiro).
*/
app.use(express.urlencoded({ extended: true }));
var port = 8030;
var hostname = 'localhost';
var repositorio = [];
app.listen(port, hostname, function() {
console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});
/*
----------------------------------------------------------------------
OBS:
----------------------------------------------------------------------
1) O emulador do Chrome usa 127.0.0.1 para apontar para o host local.
2) O emulador do Android usa 10.0.2.2 para apontar para o host local.
3) Em alguns casos, pode ser necessáiro substituir 'localhost' na URL
para o IP da conexão wi-fi. Exemplo: 
'http://localhost:8030' => 'http://192.168.1.102:8030'. 
No SO Windows, você pode obter seu IP wi-fi no prompt de comando 
com o comando cmd > ipconfig.
*/
//URL: http://127.0.0.1:8030/alunos
app.get('/alunos', function(req, res) {
    res.statusCode = 200; //Ok.
    //res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify(repositorio));
    });
    //URL: http://127.0.0.1:8030/alunos
    app.post('/alunos', function(req, res) {
    res.statusCode = 201; //Criado.
    //res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    repositorio.unshift(req.body); //Insere na primeira posição. OBS: push insere no fim.
    res.send({ "mensagem": "recurso criado" });
    });
    //URL: http://127.0.0.1:8030/alunos
    app.put('/alunos', function(req, res) {
    res.statusCode = 200; //Ok.
    //OBS: se nenhuma mensagem for enviada para o cliente, usar o código 204 (No Content).
    //res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    let aluno = repositorio.find(aluno => aluno.id === req.body.id);
    let i = repositorio.indexOf(aluno);
    repositorio[i] = req.body;
    res.send({ "mensagem": "recurso atualizado" });
    });
    //URL: http://127.0.0.1:8030/alunos/todos
    app.post('/alunos/todos', function(req, res) {
    res.statusCode = 201; //Criado.
    //res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    repositorio = [{
    "nome": "Ana",
    "nota": 5,
    },
    ];
    res.send({ "mensagem": "recurso criado" });
    });       