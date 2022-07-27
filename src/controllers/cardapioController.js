const cardapioController = (app) => {

    app.get('/cardapio', async (req, res) => {
        try {
            const todosCardapio = await CardapioModel.pegaCardapio()
            res.json({
                "cardapio": todosCardapio,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
   
}


app.get('/cardapio/codigo/:codigo', async (req, res) => {
    const codigo = req.params.codigo
    try {
        const codigo = await CodigoModel.pegaUmCardapioCodigo(email)
        res.json({
            "cliente": cliente,
            "erro": false
        })
    } catch (error) {
        res.json({
            "msg": error.message,
            "erro": true
        })
    }
})










export default cardapioController