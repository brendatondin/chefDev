import CardapioModel from "../models/cardapioModel.js"
import CardapioValidacoes from "../services/CardapioValidacoes.js"

const cardapioController = (app) => {

    app.get('/cardapio', async (req, res) => {
        
            try {
                const todosCardapio = await CardapioModel.pegaCardapio()
                res.status(200).json({
                    "cardapio": todosCardapio,
                    "erro": false
                })
            } catch (error) {
                res.status(404).json({
                    "msg": error.message,
                    "erro": true
                })
            }
      
        })

    app.get('/cardapio/codigo/:codigo', async (req, res) => {
        const codigo = req.params.codigo
        try {
            const todosCodigos = await CardapioValidacoes. _validaGetCardapio(codigo, CardapioModel.pegaUmCodigo)
            res.status(200).json({
                "cardapio": todosCodigos,
                "erro": false
            })
        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.post('/cardapio', async (req, res) => {
        const prato = req.body
        try {
            const validaPratoBody = await CardapioValidacoes._ValidaReqBodyCardapio(prato)
            const inserePrato = await CardapioModel.inserePrato(validaPratoBody)
            res.status(201).json({
                "msg": "Pedido inserido com sucesso",
                "inserePedido": inserePrato,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/cardapio/codigo/:codigo', async (req, res) => {
        const codigo = req.params.codigo
        try {
            const deletaPrato = await CardapioValidacoes._ValidaDeletaCardapio(codigo, CardapioModel.DeletaPrato)

            res.status(200).json({
                "msg": "Prato deletado com sucesso",
                "Prato" : deletaPrato,
                "erro": false
            })
        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/cardapio/codigo/:codigo', async (req, res) => {
        const codigo = req.params.codigo
        const body = req.body
        try {
            const novoCardapio = await CardapioValidacoes._ValidaReqBodyCardapio(body)
            const validaCardapio = await CardapioValidacoes._validaGetCardapio(codigo, CardapioModel.pegaUmCodigo)
            const PratoAtualizado = await CardapioValidacoes._CardapioAtualiza(validaCardapio.codigo, CardapioModel.AtualizaPrato, novoCardapio )
            res.status(202).json({
                "msg": "Prato atualizada com sucesso",
                "Prato Validado": PratoAtualizado,
                "erro": false
            })

        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

  
}




    export default cardapioController