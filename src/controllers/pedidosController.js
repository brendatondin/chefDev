const pedidosController = (app) => {

    app.get('/pedidos', async (req, res) => {
        try {
            const todosPedidos = await PedidosModel.pegaPedidos()
            res.json({
                "pedidos": todosPedidos,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.get('/pedidos/comanda/:comanda', async (req, res) => {
        const comanda = req.params.comanda
        try {
            const pedido = await PedidosModel.pegaUmPedidoComanda(comanda)
            res.json({
                "pedido": pedido,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
    app.post('/pedidos', async (req, res) => {
        const body = req.body
        try {
            const novoPedido = criaPedidos(body.prato, body.comanda, body.mesa)
            await PedidosModel.inserePedidos(novoPedido)
            res.json({
                "msg": "Pedido inserido com sucesso",
                "cliente": novoPedido,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/pedidos/comanda/:comanda', async (req, res) => {
        const comanda = req.params.comanda
        try {
            await PedidosModel.deletaPedido(comanda)

            res.json({
                "msg": "Comanda deletada com sucesso",
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
    app.put('/cliente/comanda/:comanda', async (req, res) => {
        const body = req.body
        const comanda = req.params.comanda
        try {
            const pedidoValidado = criaPedidos(body.prato, body.comanda, body.mesa)
            await PedidosModel.atualizaPedidos(comanda, pedidoValidado)
            res.json({
                "msg": "Comanda atualizada com sucesso",
                "cliente": pedidoValidado,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
    app.patch('/pedidos/mesa/comanda/:comanda', async (req, res) => {
        const comanda = req.params.comanda
        const body = req.body
        try {
            validaPedido(body.comanda)
            await PedidosModel.atualizaPedidos(comanda, {
                "comanda": body.comanda
            })
            res.json({
                "msg": "Comanda atualizada",
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


export default pedidosController