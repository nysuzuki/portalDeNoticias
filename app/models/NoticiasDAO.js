// Convenção - Nome do arquivo == Nome da classe
function NoticiasDAO(connection) {

    this._connection = connection;

}

NoticiasDAO.prototype.getNoticias = function (callback) {

    this._connection.query('select * from noticias', callback);

};

NoticiasDAO.prototype.getNoticia = function (callback) {

    this._connection.query('select * from noticias where id_noticia = 1', callback);

}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {

    console.log(noticia)

    this._connection.query('insert into noticias set ? ', noticia, callback)        // O módulo de conexão com o bd suporta parâmetro extra (JSON) -- O mySQL suporta um método de insert com o parâmetro set -- O módulo transforma o JSON numa string e substitui no ? do insert
                                                                    // O JSON tem que possuir como keys da variáveis os mesmos nomes das colunas da tabela
}


module.exports = function() {

    return NoticiasDAO;

}