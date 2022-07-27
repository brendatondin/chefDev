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


export default cardapioController