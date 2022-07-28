import CardapioModel from "../models/cardapioModel.js"
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




    app.get('/cardapio/codigo/:codigo', async (req, res) => {
        const codigo = req.params.codigo
        try {
            const codigo = await CodigoModel.pegaUmCardapioCodigo(codigo)
            res.json({
                "cardapio": codigo,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.post('/cardapio', async (req, res) => {
        const body = req.body
        try {
            const novoPrato = criaPrato(body.prato, body.codigo)
            await CardapioModel.inserePrato(novoPrato)
            res.json({
                "msg": "Prato inserido com sucesso",
                "Prato": novoPrato,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/cardapio/codigo/:codigo', async (req, res) => {
        const id = req.params.id
        try {
            await CardapioModel.deletaPrato(codigo)

            res.json({
                "msg": "Prato deletado com sucesso",
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/cardapio/codigo/:codigo', async (req, res) => {
        const body = req.body
        const codigo = req.params.codigo
        try {
            const pratoValidado = criaPrato(body.prato, body.codigo)
            await CardapioModel.atualizaCardapio(codigo, pratoValidado)
            res.json({
                "msg": "Prato atualizado com sucesso",
                "prato": pratoValidado,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.patch('/cardapio/prato/codigo/:codigo', async (req, res) => {
        const codigo = req.params.codigo
        const body = req.body
        try {
            validaPrato(body.prato)
            await CardapioModel.atualizaCardapio(codigo, {
                "prato": body.prato
            })
            res.json({
                "msg": "Prato atualizado",
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