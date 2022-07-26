import PedidosModel from "../models/pedidosModel.js"
import PedidosValidacoes from "../services/PedidosValidacoes.js";

const pedidosController = (app) => {

    app.get('/pedidos', async (req, res) => {
        try {
            const todosPedidos = await PedidosModel.pegaPedidos()
            res.status(200).json({
                "pedidos": todosPedidos,
                "erro": false
            })
        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.get('/pedidos/comanda/:comanda', async (req, res) => {
        const comanda = req.params.comanda
        try {
            const pedido = await PedidosValidacoes._validaGetPedidos(comanda, PedidosModel.pegaUmPedidoComanda)
            res.status(200).json({
                "pedido": pedido,
                "msg": `o pedido ${comanda} esta no banco de dados`,
                "erro": false
            })
        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.post('/pedidos', async (req, res) => {
        const body = req.body
        try {
            const validaBody = await PedidosValidacoes._ValidaReqBodyPedidos(body)
            const inserePedido = await PedidosModel.inserePedidos(validaBody)
            res.status(201).json({
                "msg": "Pedido inserido com sucesso",
                "inserePedido": inserePedido,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/pedidos/comanda/:comanda', async (req, res) => {
        const comanda = req.params.comanda
        try {
            const deletaPedidos = await PedidosValidacoes._ValidaDeletaPedido(comanda, PedidosModel.deletaPedidos)
            res.status(200).json({
                "msg": `Comanda ${comanda} deletada com sucesso`,
                "deletaPedidos": deletaPedidos,
                "erro": false
            })
    
        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/pedidos/comanda/:comanda', async (req, res) => {
        const pedidos = req.params.comanda
        const body = req.body
        try {
            const novoBody = await PedidosValidacoes._ValidaReqBodyPedidos(body)
            const validaComanda = await PedidosValidacoes._validaGetPedidos(pedidos, PedidosModel.pegaUmPedidoComanda)
            const pedidoValidado = await PedidosValidacoes._PedidoAtualiza(validaComanda.comanda, PedidosModel.atualizaPedido, novoBody )
            res.status(202).json({
                "msg": "Comanda atualizada com sucesso",
                "pedidoValidado": pedidoValidado,
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


export default pedidosController
