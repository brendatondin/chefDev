import CardapioModel from "../models/cardapioModel.js"
import CardapioValidacoes from "../services/CardapioValidacoes.js"
import CardapioDAO from "../DAO/cardapioDAO.js"
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
            const todosCodigos = await CardapioValidacoes. _validaGetCardapio(codigo, CardapioDAO.pegaUmPrato)
            res.json({
                "cardapio": todosCodigos,
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
            const inserePrato = await CardapioValidacoes._validaPostCardapio(body, CardapioDAO.inserePrato)
            res.json({
                "msg": "Pedido inserido com sucesso",
                "inserePedido": inserePrato,
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
        const prato = req.params.codigo
        try {
            const deletaPrato = await CardapioValidacoes._ValidaDeletaCardapio(prato, CardapioDAO.deletaPrato)

            res.json({
                "msg": "Cliente deletado com sucesso",
                "cliente" : deletaPrato,
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
        const cardapio = req.params.codigo
        const body = req.body
        try {
            const novoBody = await PedidosValidacoes._ValidaReqBodyCardapio(body)
            const CardapioValidado = await PedidosValidacoes._PedidoAtualiza(cardapio, CardapioDAO.atualizaCardapio, novoBody )
            res.json({
                "msg": "Comanda atualizada com sucesso",
                "pedidoValidado": CardapioValidado,
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