// var dbConnection = require('../../config/dbConnection');

module.exports = function(application){

    application.get('/noticias', function (req, res) {

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){
    
            // res.send(result)

            res.render("noticias/noticias", {noticias : result});       // Fazendo através do EJS
                                                                        // "noticias/noticias" é a view que vai renderizar o conteúdo
            // Chama-se engine de views - cada view vai ser processado, o que for código vai ser interpretado, e isso vai formar um HTML que vai ser enviado para quem fez a requisição
        });
    
        // connection.query(<sql>, <callback>); - sql = consulta, callback = função é o que será feito após a realização da consulta
        // connection.query('select * from noticias', );
        
    })

}

