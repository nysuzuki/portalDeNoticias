const http = require('http');       // o require faz outros arquivos (módulo, biblioteca, outras páginas) funcinarem neste arquivo aqui


// Callback: recebe uma requisição e devolve uma resposta

var server = http.createServer(function(req, response){

    let categoria = req.url;

    if(categoria == "/tecnologia"){
        response.end("<html><body>Notícias de tecnologia</body></html>");
    }
    else if(categoria == "/moda"){
        response.end("<html><body>Notícias de moda</body></html>");
    }
    else if(categoria == "/beleza"){
        response.end("<html><body>Notícias de beleza</body></html>");
    }
    else response.end("<html><body>Portal de notícias</body></html>");

});

// Servidor escuta o que está sendo requisitado na porta 3000
server.listen(3000)

console.log("Teste")