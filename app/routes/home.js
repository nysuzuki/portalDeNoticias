module.exports = function(app){

    app.get('/', function (req, res) {                         // arquivo EJS que vai ser renderizado quando a requisição for feita
        res.render("home/index");
    })

}