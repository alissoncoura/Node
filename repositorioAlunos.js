/*
Baixar o Express. No terminal: npm install express --save
Baixar o CORS. No terminal: npm install cors --save
*/
//Rodar: node .\repositorioAlunos.js
var express = require('express');
var cors = require('cors');
var app = express();
/*CORS - Cross-Origin Resource Sharing (Compartilhamento
de Recursos com Origens Diferentes): 
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS
https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
*/
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
//URL: http://localhost:8030/alunos
app.get('/alunos', function(req, res) {
    res.statusCode = 200; //Ok.
    //res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify(repositorio));
    });
    //URL: http://localhost:8030/alunos
    app.post('/alunos', function(req, res) {
    res.statusCode = 201; //Criado.
    //res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    repositorio.unshift(req.body); //Insere na primeira posição. OBS: push insere no fim.
    res.send({ "mensagem": "recurso criado" });
    });
    //URL: http://localhost:8030/alunos
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
    //URL: http://localhost:8030/alunos
    app.delete('/alunos', function(req, res) {
    res.statusCode = 200; //Ok.
    //OBS: se nenhuma mensagem for enviada para o cliente, usar o código 204 (No Content).
    //res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    let aluno = repositorio.find(aluno => aluno.id === req.body.id);
    let i = repositorio.indexOf(aluno);
    if (i > -1)
    repositorio.splice(i, 1); //Remove 1 elemento a partir da posição i.
    res.send({ "mensagem": "recurso excluído" });
    });
    //URL: http://localhost:8030/alunos/todos
    app.post('/alunos/todos', function(req, res) {
    res.statusCode = 201; //Criado.
    //res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    repositorio = [{
    "id": 1,
    "nome": "Ana",
    "nota": 111,
    "curso": "ADS"
    },
    {
    "id": 2,
    "nome": "Bia",
    "nota": 80,
    "curso": "Ciência da computação"
    },
    {
    "id": 3,
    "nome": "Caio",
    "nota": 60,
    "curso": "Direito"
    },
    {
    "id": 4,
    "nome": "Davi",
    "nota": 50,
    "curso": "Engenharia Mecatrônica"
    },
    {
    "id": 5,
    "nome": "Ester",
    "nota": 90,
    "curso": "História"
    }
    ];
    res.send({ "mensagem": "recurso criado" });
    });
    //URL: http://localhost:8030/alunos/todos
    app.delete('/alunos/todos', function(req, res) {
    res.statusCode = 200; //Ok.
    //res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    repositorio = [];
    res.send({ "mensagem": "recurso excluído" });
    });        