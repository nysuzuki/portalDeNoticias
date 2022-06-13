var mysql = require('mysql');

var connMySQL = function(){

    return mysql.createConnection ({
        host : 'localhost',         // Endereço do servidor. Como o servidor está instalado na máquina em que está a aplicação, usamos o DNS de loopback (requisita solicitação para a própria máquinas)
        user : 'root',              // Usuário que tem acesso ao banco??
        password : '1234',      // Senha para acesso ao banco
        database : 'portal_noticias',
        insecureAuth: true
    });

}

// Passando um JSON que o createConnection do nódulo mysql espera receber

module.exports = function(){

    return connMySQL;           // Evita que a função seja executada no autoload porque estará contida em uma variável
}