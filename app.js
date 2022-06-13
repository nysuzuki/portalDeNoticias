var app = require('./config/server')


// app.get('/tecnologia', function (req, res) {
//     res.send("<html><body>Portal de notícias de tecnologia</body></html>");
// })

// var rotaHome = require('./app/routes/home')(app);

// var rotaNoticias = require('./app/routes/noticias')(app);

// var rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app);

// o callback é executado na subida do servidor
app.listen(3000, function() {
    console.log("Servidor ON")
})