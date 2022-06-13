// var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    app.get('/noticia', function (req, res) {

        var connection = app.config.dbConnection()

        var noticiasModel = new app.app.models.NoticiasDAO(connection);
    
        // connection.query(<sql>, <callback>); - sql = consulta, callback = função é o que será feito após a realização da consulta
        noticiasModel.getNoticia(function(error, result){
    
            // res.send(result)

            res.render("noticias/noticia", {noticia : result});       // Fazendo através do EJS
                                                                        // "noticias/noticias" é a view que vai renderizar o conteúdo
            // Chama-se engine de views - cada view vai ser processado, o que for código vai ser interpretado, e isso vai formar um HTML que vai ser enviado para quem fez a requisição
        });
        
    })

}

