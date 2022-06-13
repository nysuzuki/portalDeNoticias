var express = require("express");   // chama a biblioteca do express
var consign = require("consign");
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

var app = express();                // executa a função que o módulo express retorna
app.set('view engine', 'ejs');      // informando ao express que o engine de views passa a ser o módulo EJS
app.set('views', './app/views')                // no app.js, por padrão, elas eram procuradas no diretório principal

// O body parser funciona como middleware - módulo que atua nos objetos de requisição e resposta
// Como funciona como middleware, tem que parametrizar para que trate os formulários - passar parâmetro para a função URL encoded
app.use(bodyParser.urlencoded({extended: true}));       // Permite que sejam implementadas as URLs codificadas
app.use(expressValidator());

// Quando o consign faz o load dos módulos, ele já executa o que exporta
consign() 
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app