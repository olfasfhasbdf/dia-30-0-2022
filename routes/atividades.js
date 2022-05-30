module.exports = (app)=>{
    app.post('/atividades',async (req,res)=>{
        var dados = req.body
        //return console.log(dados)
        //connectar com o database
        const database = require("../config/database")
        //importar o model atividades
        const atividades = require("../models/atividades")
        //gravar as informações do formulario no databse
        var gravar = await new atividades({
            data:dados.data,
            tipo:dados.tipos,
            entrega:dados.entrega,
            diciplina:dados.diciplinas,
            instrucoes:dados.orintacoes,
            usuario:dados.id
        }).save()
        //recarregar a pagina atividades
        res.render('atividades.ejs',{nome:dados.nome,id:dados.id})
    })
}