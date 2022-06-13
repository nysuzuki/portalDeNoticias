module.exports = function(application){

    application.get('/formulario_inclusao_noticia', function (req, res) {
        res.render("admin/form_add_noticia", {validacao : {}, noticia: {}});
    })

    application.post('/noticias/salvar', function (req, res) {
        console.log(noticia)
        var noticia = req.body;        // Trazer módulo body parser

        req.check('titulo','Título obrigatório').notEmpty();
        req.check('resumo','Resumo obrigatório').notEmpty();
        req.check('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.check('autor','Autor obrigatório').notEmpty();
        req.check('data_noticia','Data obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.check('noticia','Notícia obrigatória').notEmpty();

        var erros = req.validationErrors();
        console.log('erros: '+erros);

        if (erros) {
            res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
            return;
        }

        // Conexão
        var connection = application.config.dbConnection();

        // Model
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        // Função salvarNoticia
        noticiasModel.salvarNoticia(noticia, function(error, result){
            // res.render("noticias/noticias", {noticias : result});
            res.redirect('/noticias')      // Redireciona o browser para outra página
        });

        
    })

}